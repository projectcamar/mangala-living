import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './FAQSection.css'

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Apa saja layanan Bengkel Las Bekasi?",
      answer: "Bengkel Las Bekasi kami melayani berbagai jasa las profesional termasuk: pembuatan kanopi minimalis, pagar besi tempa, pintu besi anti maling, teralis jendela, railing tangga stainless steel, konstruksi baja ringan, bike rack custom, pintu dorong otomatis, pintu kayu ulin kombinasi besi, dan berbagai kebutuhan las lainnya. Kami juga menerima pesanan custom dengan desain dari pelanggan. Semua pengerjaan dilakukan oleh tukang las berpengalaman dengan hasil rapi dan berkualitas."
    },
    {
      question: "Apa bisa membuat custom desain?",
      answer: "Tentu saja! Kami sangat terbuka untuk membuat desain custom sesuai keinginan dan kebutuhan pelanggan. Tim desainer kami siap membantu mewujudkan ide dan konsep yang Anda miliki menjadi produk yang nyata dengan kualitas terbaik."
    },
    {
      question: "Berapa ketebalan besi yang digunakan?",
      answer: "Kami menggunakan beberapa jenis besi seperti galvalum dengan ketebalan kisaran 1 ml sampai 2 ml. Selain itu, kami juga menggunakan besi hollow dengan berbagai ukuran (40x40, 50x50, 60x60), besi plat dengan ketebalan 2mm, 3mm, dan 4mm, serta baja WF untuk konstruksi yang lebih besar."
    },
    {
      question: "Apakah gratis ongkos kirim?",
      answer: "Untuk area Jakarta dan sekitarnya, kami memberikan layanan gratis ongkos kirim. Untuk area yang lebih jauh, akan ada biaya tambahan ongkos kirim yang disesuaikan dengan jarak dan ukuran produk. Silakan konsultasikan dengan tim kami untuk informasi lebih detail."
    },
    {
      question: "Berapa lama waktu pengerjaan?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas dan ukuran proyek. Untuk proyek sederhana seperti teralis atau pagar, biasanya selesai dalam 3-5 hari. Sedangkan untuk proyek besar seperti konstruksi baja atau kanopi custom, membutuhkan waktu 1-2 minggu. Kami selalu berusaha menyelesaikan tepat waktu sesuai kesepakatan."
    },
    {
      question: "Apakah ada garansi untuk produk?",
      answer: "Ya, kami memberikan garansi kualitas untuk semua produk dan jasa yang kami berikan. Garansi meliputi kualitas material, finishing, dan pemasangan. Tim kami siap melayani kebutuhan purna jual dan perbaikan jika diperlukan dalam masa garansi."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" itemScope itemType="https://schema.org/FAQPage">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">FAQ Bengkel Las Bekasi</div>
          <h2>Pertanyaan Umum Tentang Jasa Las Bekasi</h2>
          <p>Informasi lengkap seputar layanan bengkel las dan harga las di Bekasi</p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                itemProp="name"
              >
                <span className="question-text">{faq.question}</span>
                <div className="question-icon">
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>
              
              <div 
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
                itemScope 
                itemProp="acceptedAnswer" 
                itemType="https://schema.org/Answer"
              >
                <div className="answer-content">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
