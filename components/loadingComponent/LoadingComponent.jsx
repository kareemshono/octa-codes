import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './LoadingComponent.module.scss';
import Image from 'next/image';
import { Inter } from 'next/font/google';


const inter = Inter({subsets:["latin"]})
const LoadingComponent = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the flashing logo
    gsap.to(logoRef.current, {
      opacity: .2,
      duration: 1,
      repeat: 5,  
      yoyo: true,
      ease: 'power1.inOut',
      onComplete: () => {
        
        gsap.to(logoRef.current, { opacity: 0, duration: 0.5 });
      }
    });
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loader}></span>
      <div className={styles.logo} ref={logoRef}>
        {/* <Image priority src="/spinner.svg" width={200} height={200} alt="Loading Logo" /> */}
        <h4 className={`${styles.title} ${inter.className}`}>Almost there, Hang tight...</h4>
        
      </div>
    </div>
  );
};

export default LoadingComponent;
