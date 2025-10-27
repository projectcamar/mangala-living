import React from 'react'
import '../pages/About.css'
import showroomImage from '../assets/pngtree-a-welder-works-with-metal-in-a-factory-shop.webp'

interface MessageSectionProps {
  isIndonesian?: boolean
}

const MessageSection: React.FC<MessageSectionProps> = ({ isIndonesian = false }) => {
  return (
    <section className="about-message-section">
      <div className="about-message-container">
        <div className="about-message-content">
          <div className="about-message-text">
            <h2 className="about-message-title">
              {isIndonesian ? "Pesan dari Mangala" : "Message from Mangala"}
            </h2>
            <div className="about-message-body">
              {isIndonesian ? (
                <>
                  <p className="about-message-paragraph">
                    Sejak 1999, Mangala Living telah menjadi manufacturer terdepan di Indonesia yang mengkhususkan diri dalam furniture industrial scandinavian premium. 
                    Dengan pengalaman 25 tahun di industri, kami telah membuktikan diri sebagai pilihan terbaik untuk solusi furniture komersial. 
                    Jaringan kami menjangkau seluruh kepulauan Indonesia, telah berhasil menyelesaikan lebih dari 1.000 pesanan untuk bisnis di seluruh negeri.
                  </p>
                  
                  <p className="about-message-paragraph">
                    Kami mengkhususkan diri dalam menciptakan furniture yang tahan lama dan estetis mencolok untuk ruang komersial. Dari coffee shop trendy 
                    dan restoran ramai hingga kantor modern dan hotel butik, furniture industrial scandinavian kami memberikan nada yang sempurna. 
                    Kami sepenuhnya menerima permintaan custom dan bekerja sama dengan klien untuk merancang produk yang sesuai dengan identitas merek 
                    dan kebutuhan fungsional mereka.
                  </p>
                  
                  <p className="about-message-paragraph">
                    Workshop kami di Bekasi dilengkapi dengan peralatan manufaktur canggih dan dikelola oleh pengrajin berpengalaman yang 
                    bangga dengan setiap detail dan finishing. Setiap produk melalui kontrol kualitas yang ketat untuk memastikan memenuhi standar tertinggi 
                    kami dalam hal daya tahan dan daya tarik visual. Baik Anda membutuhkan paket furniture lengkap untuk coffee shop baru atau produk custom 
                    untuk melengkapi ruang yang ada, kami siap membantu bisnis Anda menonjol.
                  </p>
                </>
              ) : (
                <>
                  <p className="about-message-paragraph">
                    Since 1999, Mangala Living has been Indonesia's leading manufacturer specializing in premium industrial scandinavian furniture. 
                    With 25 years of experience in the industry, we've established ourselves as the best choice for commercial furniture 
                    solutions. Our network spans across the Indonesian archipelago, having successfully completed over 1,000 orders for 
                    businesses nationwide.
                  </p>
                  
                  <p className="about-message-paragraph">
                    We specialize in creating durable, aesthetically striking furniture for commercial spaces. From trendy coffee shops 
                    and bustling restaurants to modern offices and boutique hotels, our industrial scandinavian furniture sets the perfect tone. 
                    We fully accept custom requests and work collaboratively with our clients to design pieces that match their brand identity 
                    and functional requirements.
                  </p>
                  
                  <p className="about-message-paragraph">
                    Our workshop in Bekasi is equipped with state-of-the-art manufacturing equipment and staffed by experienced craftsmen 
                    who take pride in every detail and finish. Each piece undergoes rigorous quality control to ensure it meets our highest 
                    standards of durability and visual appeal. Whether you need a complete furniture package for a new coffee shop or custom 
                    pieces to complement your existing space, we're here to help your business stand out.
                  </p>
                </>
              )}
            </div>
          </div>
          
          <div className="about-message-image-wrapper">
            <img 
              src={showroomImage} 
              alt="Mangala Living Workshop" 
              className="about-message-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection

