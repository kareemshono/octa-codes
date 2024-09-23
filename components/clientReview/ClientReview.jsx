// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
             <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
             <h2>Client Name</h2>
             <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
             <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
             <h2>Client Name</h2>
             <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
             <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
             <h2>Client Name</h2>
             <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
             
             <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
            <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
            <h2>Client Name</h2>
            <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
            <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
            <h2>Client Name</h2>
            <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
            <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
            <h2>Client Name</h2>
            <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
           
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
            <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
            <h2>Client Name</h2>
            <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
            <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
            <h2>Client Name</h2>
            <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
              <span><Image alt="user-logo"  src={"/quote.svg"} height={50} width={50} /></span>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.reviewContainer}>
            <div className={styles.colLeft}>
            <Image alt="user-logo"  src={"/user.svg"} width={150} height={150}/>
            <h2>Client Name</h2>
            <p>Client Profession</p>
            </div>
            <div className={styles.colRight}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam obcaecati laborum illo vitae. Provident consequatur esse odit natus, molestiae blanditiis! Quibusdam mollitia perferendis repudiandae voluptatibus tempora, doloribus labore modi minima non aspernatur aut quam pariatur, sunt accusantium beatae exercitationem! Aut, dicta. Veniam quibusdam dolore eos ab commodi? Libero, officia aliquid?</p>
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