import React, { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import './TestimonialSection.css'

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Bayu Prasetyo",
      role: "Pemilik Rumah di Jababeka",
      text: "Sangat puas dengan jasa las Bengkel Las Mandiri! Saya pesan teralis jendela anti maling, pagar besi tempa, dan kanopi minimalis untuk rumah. Hasilnya sangat rapi dan kuat. Harga las termurah di Bekasi dengan kualitas premium. Recommended!",
      rating: 5,
      date: "2024-03-15",
      avatar: "https://ui-avatars.com/api/?name=Bayu+Prasetyo&background=ff6b35&color=fff&size=150&bold=true",
      location: "Jababeka"
    },
    {
      name: "Nanda Gita",
      role: "Pemilik Toko di Grand Galaxy",
      text: "Sangat puas dengan kanopi Alderon dari Bengkel Las Mandiri! Rangka besinya tebal dan kokoh, material Alderon asli berkualitas tinggi. Pengerjaan super rapi dan cepat, hanya 3 hari sudah selesai. Tim profesional dan berpengalaman. Terima kasih Pak Maman Toha!",
      rating: 5,
      date: "2024-02-20",
      avatar: "https://ui-avatars.com/api/?name=Nanda+Gita&background=f7931e&color=fff&size=150&bold=true",
      location: "Grand Galaxy"
    },
    {
      name: "Nani Sugiarti",
      role: "Pemilik Rumah di Pekayon",
      text: "Bengkel Las Mandiri mengerjakan pagar minimalis, teralis, dan kanopi untuk rumah baru saya dengan hasil sempurna! Material sesuai permintaan, pengerjaan rapi, dan pemasangan tepat waktu. Sangat menghargai keinginan pelanggan dan konsisten menjaga kualitas. Terima kasih atas layanan terbaiknya!",
      rating: 5,
      date: "2024-01-25",
      avatar: "https://ui-avatars.com/api/?name=Nani+Sugiarti&background=667eea&color=fff&size=150&bold=true",
      location: "Pekayon"
    },
    {
      name: "Ambrosius Hari Nugraha",
      role: "Kontraktor di Cibarusah",
      text: "Bengkel Las Mandiri adalah partner terpercaya untuk proyek-proyek konstruksi kami. Pak Maman Toha dan timnya sangat profesional, hasil las rapi, dan harga bersaing. Bahan besi berkualitas tinggi dan pengerjaan tangga besi selalu memuaskan. Sangat direkomendasikan untuk area Bekasi dan sekitarnya!",
      rating: 5,
      date: "2024-03-01",
      avatar: "https://ui-avatars.com/api/?name=Ambrosius+Nugraha&background=28a745&color=fff&size=150&bold=true",
      location: "Cibarusah"
    },
    {
      name: "Rohman Edi Wibowo",
      role: "Pemilik Rumah di Harapan Indah",
      text: "Bengkel Las Mandiri mengerjakan kanopi spandek dengan pelapis anti panas bubble aluminium foil untuk rumah saya. Hasilnya sangat memuaskan! Suhu ruangan jadi lebih sejuk dan tampilan kanopi modern. Pengerjaan cepat dan tim sangat ramah. Terima kasih atas pelayanan terbaiknya!",
      rating: 5,
      date: "2024-02-10",
      avatar: "https://ui-avatars.com/api/?name=Rohman+Wibowo&background=17a2b8&color=fff&size=150&bold=true",
      location: "Harapan Indah"
    }
  ]

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="testimonial-section" id="testimonial" itemScope itemType="https://schema.org/Organization">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Testimoni Pelanggan</div>
          <h2>Apa Kata Mereka Tentang Bengkel Las Bekasi</h2>
          <p>Testimoni dari pelanggan setia Bengkel Las Mandiri di Bekasi</p>
        </div>
        
        <div className="testimonial-slider">
          <div className="testimonial-slide" itemProp="review" itemScope itemType="https://schema.org/Review">
            <meta itemProp="datePublished" content={testimonials[currentIndex].date} />
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content={testimonials[currentIndex].rating.toString()} />
              <meta itemProp="bestRating" content="5" />
            </div>
            
            <div className="testimonial-avatar">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={`Foto ${testimonials[currentIndex].name} - Pelanggan Bengkel Las Bekasi`}
                className="avatar-image"
                loading="lazy"
                width="150"
                height="150"
              />
              <div className="star-overlay">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#ff6b35" color="#ff6b35" />
                ))}
              </div>
            </div>
            
            <div className="testimonial-content">
              <div className="testimonial-header">
                <h3 className="testimonial-name" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">{testimonials[currentIndex].name}</span>
                  <span className="testimonial-role">{testimonials[currentIndex].role}</span>
                </h3>
                <div className="testimonial-location">
                  <span itemProp="locationCreated">{testimonials[currentIndex].location}</span>
                </div>
              </div>
              <p className="testimonial-text" itemProp="reviewBody">"{testimonials[currentIndex].text}"</p>
            </div>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
