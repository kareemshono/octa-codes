// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import styles from "./ClientReview.module.scss"
import Image  from 'next/image';

const ClientReview = () => {
  return (
    <section className={styles.clientReviewContainer}>
      <div className={styles.header}>
      <h1>What Our Clients Say About Us</h1>
      <p>Hear from Those Who Trust Our Expertise</p>
      </div>
      
      <div className={styles.swiperContainer}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
             <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
             <h2>Peter Chal</h2>
             <p>Lebanon</p>
            </div>
            <div className={styles.colRight}>
              <p>Octa's blend of CTO consulting and cybersecurity knowledge was exactly what my company needed. they conducted a thorough assessment of our technology needs and crafted a strategic plan that maximized efficiency.their ability to translate complex technical concepts into actionable solutions made the entire process smooth and productive. 
                 I wouldn't hesitate to recommend Rami to anyone seeking a trusted advisor in the ever-changing tech world.</p>
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
             <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
             <h2>Andrew Johns</h2>
             <p>UK</p>
            </div>
            <div className={styles.colRight}>
              <p>Octa's approach as  consultantancy is refreshingly comprehensive. they delves into the technical and strategic aspects of our business, ensuring our technology aligns seamlessly with our overall goals. their cybersecurity expertise provides an additional layer of protection, giving us peace of mind as we navigate the digital age. I highly recommend their services to any company seeking to
                 gain a competitive advantage through strategic technology leadership.</p>
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
             <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
             <h2>Ali al Faizi</h2>
             <p>UAE</p>
            </div>
            <div className={styles.colRight}>
              <p>Having Octa on my side was a game-changer. their expertise in  cybersecurity helped us navigate the digital landscape. Octa's guidance on fortifying our IT infrastructure instilled confidence in our data security. they conducted a thorough analysis and created a strategic plan. I highly recommend thier services to any company seeking a future-proof technology roadmap and robust cybersecurity solutions.</p>
             
             <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
            
          </div>
        </SwiperSlide>
    
      
        
      </Swiper>
      </div>
    </section>
  )
}

export default ClientReview