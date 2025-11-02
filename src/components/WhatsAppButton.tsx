import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import './WhatsAppButton.css'
import { trackEvent } from '../utils/analytics'
import MessageRenderer from './MessageRenderer'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface UserInfo {
  name: string
  email: string
  isCompleted: boolean
}


const WhatsAppButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isIndonesian, setIsIndonesian] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How may I help you with your furniture needs at Mangala Living?',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    isCompleted: false
  })
  const [firstMessage, setFirstMessage] = useState('')
  const [conversationStage, setConversationStage] = useState<'greeting' | 'collecting_info' | 'assisting'>('collecting_info')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Language detection effect
  useEffect(() => {
    const detectLanguage = async () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
      
      try {
        // Try to get location from IP
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        if (data.country_code === 'ID') {
          setIsIndonesian(true)
          // Update initial message to Indonesian
          setMessages([{
            id: '1',
            text: `${timeString}\n\nHai ??! Selamat datang di Mangala Living. Beri tahu saya jika Anda memiliki pertanyaan.\n\nJangan ragu untuk whatsapp di [+62 852 1207 8467](https://wa.me/6285212078467)`,
            isUser: false,
            timestamp: new Date()
          }])
        } else {
          setMessages([{
            id: '1',
            text: `${timeString}\n\nHi there ??! Welcome to the Mangala Living. Let me know if you have any questions.\n\nFeel free to whatsapp on [+62 852 1207 8467](https://wa.me/6285212078467)`,
            isUser: false,
            timestamp: new Date()
          }])
        }
      } catch (error) {
        console.log('IP detection failed, checking browser language')
        // Fallback: check browser language
        const browserLang = navigator.language || navigator.languages?.[0]
        if (browserLang?.startsWith('id')) {
          setIsIndonesian(true)
          setMessages([{
            id: '1',
            text: `${timeString}\n\nHai ??! Selamat datang di Mangala Living. Beri tahu saya jika Anda memiliki pertanyaan.\n\nJangan ragu untuk whatsapp di [+62 852 1207 8467](https://wa.me/6285212078467)`,
            isUser: false,
            timestamp: new Date()
          }])
        } else {
          setMessages([{
            id: '1',
            text: `${timeString}\n\nHi there ??! Welcome to the Mangala Living. Let me know if you have any questions.\n\nFeel free to whatsapp on [+62 852 1207 8467](https://wa.me/6285212078467)`,
            isUser: false,
            timestamp: new Date()
          }])
        }
      }
    }

    detectLanguage()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded) {
      trackEvent.whatsappClick('expand_chat')
    }
  }

  const handleWhatsAppRedirect = () => {
    trackEvent.whatsappClick('redirect_to_whatsapp')
    const whatsappMessage = isIndonesian 
      ? `Halo, saya tertarik dengan furniture Mangala Living. Bisakah saya mendapatkan informasi lebih lanjut?`
      : `Hello, I'm interested in Mangala Living furniture. Can I get more information?`
    const whatsappUrl = `https://wa.me/6285212078467?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }



  const generateSmartResponse = async (): Promise<string> => {
    // Simple response without AI - always redirect to WhatsApp
    return getSimpleResponse()
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (userInfo.name && userInfo.email) {
      setUserInfo(prev => ({ ...prev, isCompleted: true }))
      setConversationStage('assisting')
      
      // Send lead data to API
      try {
        await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: userInfo.name,
            email: userInfo.email,
            firstMessage: firstMessage,
            language: isIndonesian ? 'id' : 'en',
            notificationType: 'chatbot_lead'
          }),
        })
      } catch (error) {
        console.error('Failed to send lead data:', error)
      }
      
      const formMessage: Message = {
        id: Date.now().toString(),
        text: isIndonesian 
          ? `Terima kasih, ${userInfo.name}! Saya di sini untuk membantu Anda dengan informasi terkait furniture Mangala Living. Bagaimana saya bisa membantu Anda hari ini?`
          : `Thank you, ${userInfo.name}! I am here to assist you with information related to Mangala Living furniture. How may I help you today?`,
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, formMessage])
    }
  }



  const getSimpleResponse = (): string => {
    // Simple fallback responses without API key
    const responses = isIndonesian ? [
      "Terima kasih atas pertanyaan Anda! Untuk informasi lebih lanjut tentang produk furniture industrial kami, silakan hubungi kami langsung di WhatsApp.",
      "Saya senang membantu Anda! Untuk konsultasi produk dan harga, silakan hubungi tim kami di WhatsApp.",
      "Pertanyaan yang bagus! Tim kami akan dengan senang hati membantu Anda. Silakan hubungi kami di WhatsApp untuk informasi lengkap."
    ] : [
      "Thank you for your question! For more information about our industrial furniture products, please contact us directly on WhatsApp.",
      "I'm happy to help! For product consultation and pricing, please contact our team on WhatsApp.",
      "Great question! Our team will be happy to assist you. Please contact us on WhatsApp for complete information."
    ]
    
    return responses[Math.floor(Math.random() * responses.length)]
  }


  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return

    // If user hasn't completed info, store the first message and show form
    if (!userInfo.isCompleted) {
      setFirstMessage(inputText)
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        isUser: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])
      setInputText('')
      // Form will show automatically since conversationStage is 'collecting_info'
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    try {
      const aiResponse = await generateSmartResponse()
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error generating response:', error)
      // Use simple response for error
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
        text: getSimpleResponse(),
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="whatsapp-container">
      {/* Expanded Chat Interface */}
      {isExpanded && (
        <div className="whatsapp-chat">
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-title">
                <Bot size={16} />
                <span>Mangala Living</span>
              </div>
              <div className="chat-subtitle">
                {isIndonesian ? "Kami akan membalas secepat mungkin" : "We'll reply as soon as we can"}
              </div>
            </div>
            <button className="close-chat" onClick={handleExpand} aria-label="Close chat">
              <X size={14} />
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}>
                <div className="message-avatar">
                  {message.isUser ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className="message-content">
                  <MessageRenderer text={message.text} />
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Form UI for collecting info */}
            {conversationStage === 'collecting_info' && !userInfo.isCompleted && firstMessage && (
              <div className="message ai-message">
                <div className="message-avatar">
                  <Bot size={14} />
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {isIndonesian ? 'Hei, silakan tinggalkan detail Anda agar kami dapat menghubungi Anda bahkan jika Anda sudah tidak berada di situs ini.' : 'Hey there, please leave your details so we can contact you even if you are no longer on the site.'}
                  </div>
                  <form onSubmit={handleFormSubmit} className="info-form">
                    <div className="form-group">
                      <label>{isIndonesian ? 'Nama' : 'Name'}</label>
                      <input
                        type="text"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                        placeholder={isIndonesian ? 'Pastikan untuk menambahkan nama Anda' : 'Make sure to add your name'}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <button type="submit" className="submit-form-btn">
                      {isIndonesian ? 'Kirim' : 'Submit'}
                    </button>
                  </form>
                </div>
              </div>
            )}
            
            {isLoading && (
              <div className="message ai-message">
                <div className="message-avatar">
                  <Bot size={14} />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={isIndonesian ? "Ketik pesan Anda..." : "Type your message..."}
              disabled={isLoading || Boolean(conversationStage === 'collecting_info' && firstMessage && !userInfo.isCompleted)}
            />
            <button 
              className="send-button" 
              onClick={sendMessage}
              disabled={!inputText.trim() || isLoading || Boolean(conversationStage === 'collecting_info' && firstMessage && !userInfo.isCompleted)}
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
            </div>
          
          <div className="chat-footer">
            <button className="whatsapp-redirect" onClick={handleWhatsAppRedirect} aria-label={isIndonesian ? "Lanjutkan di WhatsApp" : "Continue on WhatsApp"}>
              <MessageCircle size={14} />
              <span>{isIndonesian ? "Lanjutkan di WhatsApp" : "Continue on WhatsApp"}</span>
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button className="whatsapp-button" onClick={handleExpand} aria-label={isIndonesian ? "Hubungi Kami" : "Contact Us"}>
        <MessageCircle size={18} />
        <span>{isIndonesian ? "Hubungi Kami" : "Contact Us"}</span>
      </button>
    </div>
  )
}

export default WhatsAppButton
