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
                  <h3 className="about-message-subtitle">Tentang Mangala Living - Manufacturer Furniture Industrial Terpercaya</h3>
                  <p className="about-message-paragraph">
                    Sejak tahun 1999, Mangala Living telah menjadi manufacturer terdepan di Indonesia yang mengkhususkan diri dalam pembuatan furniture industrial scandinavian premium. 
                    Dengan pengalaman lebih dari 25 tahun di industri furniture besi custom, kami telah membuktikan diri sebagai pilihan terbaik untuk solusi furniture komersial. 
                    Jaringan kami menjangkau seluruh kepulauan Indonesia, dan kami telah berhasil menyelesaikan lebih dari 1.000 pesanan untuk berbagai bisnis di seluruh negeri. Dari cafe kecil hingga hotel besar, kami melayani semua dengan standar kualitas yang sama tinggi.
                  </p>
                  
                  <h3 className="about-message-subtitle">Bar Set, Lounge Set, Sofa Bench & Storage untuk Ruang Komersial</h3>
                  <p className="about-message-paragraph">
                    Kami mengkhususkan diri dalam menciptakan bar set outdoor, lounge set, sofa bench, storage rack dan furniture industrial lainnya yang tahan lama untuk berbagai ruang komersial. Dari coffee shop trendy 
                    dan restoran ramai hingga kantor modern dan hotel butik yang elegan, koleksi new arrivals kami memberikan sentuhan yang sempurna untuk menciptakan atmosfer unik. 
                    Kami sepenuhnya menerima permintaan custom dan bekerja sama dengan klien untuk merancang produk yang sesuai dengan identitas merek unik mereka
                    dan kebutuhan fungsional mereka. Setiap produk dirancang dengan mempertimbangkan kenyamanan, estetika, dan daya tahan jangka panjang.
                  </p>
                  
                  <h3 className="about-message-subtitle">Workshop Bekasi dengan Standar Manufaktur Terbaik</h3>
                  <p className="about-message-paragraph">
                    Workshop kami yang berlokasi strategis di Bekasi dilengkapi dengan peralatan manufaktur canggih dan dikelola oleh tim pengrajin berpengalaman yang 
                    sangat bangga dengan setiap detail dan finishing produk. Setiap produk melalui proses kontrol kualitas yang ketat untuk memastikan memenuhi standar tertinggi 
                    kami dalam hal daya tahan dan daya tarik visual. Baik Anda membutuhkan paket furniture lengkap untuk coffee shop baru atau produk custom 
                    untuk melengkapi ruang yang sudah ada, kami siap membantu bisnis Anda menonjol dan menciptakan ruang yang berkesan bagi pelanggan Anda.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="about-message-subtitle">About Mangala Living - Trusted Industrial Furniture Manufacturer</h3>
                  <p className="about-message-paragraph">
                    Since 1999, Mangala Living has been Indonesia's leading manufacturer specializing in premium industrial scandinavian furniture. 
                    With more than 25 years of experience in the custom steel furniture industry, we've established ourselves as the best choice for commercial furniture 
                    solutions. Our network spans across the Indonesian archipelago, and we have successfully completed over 1,000 orders for 
                    various businesses nationwide. From small cafes to large hotels, we serve all with the same high quality standards.
                  </p>
                  
                  <h3 className="about-message-subtitle">Bar Set, Lounge Set, Sofa Bench & Storage for Commercial Spaces</h3>
                  <p className="about-message-paragraph">
                    We specialize in creating bar set outdoor, lounge set, sofa bench, storage rack and other durable industrial furniture for various commercial spaces. From trendy coffee shops 
                    and bustling restaurants to modern offices and elegant boutique hotels, our new arrivals collection sets the perfect tone to create a unique atmosphere. 
                    We fully accept custom requests and work collaboratively with our clients to design pieces that match their unique brand identity 
                    and functional requirements. Each product is designed with consideration for comfort, aesthetics, and long-term durability.
                  </p>
                  
                  <h3 className="about-message-subtitle">Bekasi Workshop with Best Manufacturing Standards</h3>
                  <p className="about-message-paragraph">
                    Our strategically located workshop in Bekasi is equipped with state-of-the-art manufacturing equipment and staffed by a team of experienced craftsmen 
                    who take immense pride in every detail and finish of the product. Each piece undergoes rigorous quality control processes to ensure it meets our highest 
                    standards of durability and visual appeal. Whether you need a complete furniture package for a new coffee shop or custom 
                    pieces to complement your existing space, we're here to help your business stand out and create a memorable space for your customers.
                  </p>
                </>
              )}
            </div>
          </div>
          
          <div className="about-message-image-wrapper">
            <img 
              src={showroomImage} 
              alt={isIndonesian ? "Workshop Mangala Living Bekasi - Manufacturer Furniture Industrial Besi Custom dengan Peralatan Modern dan Pengrajin Berpengalaman" : "Mangala Living Bekasi Workshop - Industrial Steel Custom Furniture Manufacturer with Modern Equipment and Experienced Craftsmen"}
              title={isIndonesian ? "Workshop Mangala Living - Premium Industrial Furniture Manufacturing in Bekasi Since 1999" : "Mangala Living Workshop - Premium Industrial Furniture Manufacturing in Bekasi Since 1999"}
              className="about-message-image"
              loading="lazy"
              width="600"
              height="450"
              itemProp="image"
              data-image-type="workshop"
              data-category="about-us"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessageSection

