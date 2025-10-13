import React from 'react'
import { Link } from 'react-router-dom'
import './MessageSection.css'
import showroomImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.jpg'

const MessageSection: React.FC = () => {
  return (
    <section className="message-section">
      <div className="container">
        <div className="message-content">
          {/* Left Side - Text */}
          <div className="message-text">
            <h2 className="message-title">Message from Mangala</h2>
            
            <div className="message-body">
              <p>
                Since 1999, Mangala Living has been Indonesia's leading manufacturer specializing in premium industrial scandinavian furniture. 
                With 25 years of experience in the industry, we've established ourselves as the best choice for commercial furniture 
                solutions. Our network spans across the Indonesian archipelago, having successfully completed over 1,000 orders for 
                businesses nationwide.
              </p>
              
              <p>
                We specialize in creating durable, aesthetically striking furniture for commercial spaces. From trendy coffee shops 
                and bustling restaurants to modern offices and boutique hotels, our industrial scandinavian furniture sets the perfect tone. 
                We fully accept custom requests and work collaboratively with our clients to design pieces that match their brand identity 
                and functional requirements.
              </p>
              
              <p>
                Our workshop in Bekasi is equipped with state-of-the-art manufacturing equipment and staffed by experienced craftsmen 
                who take pride in every detail and finish. Each piece undergoes rigorous quality control to ensure it meets our highest 
                standards of durability and visual appeal. Whether you need a complete furniture package for a new coffee shop or custom 
                pieces to complement your existing space, we're here to help your business stand out.
              </p>
            </div>
            
            <Link to="/about" className="read-more-btn">
              • READ MORE
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="message-image">
            <img 
              src={showroomImage} 
              alt="Mangala Living Showroom" 
              className="showroom-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection

