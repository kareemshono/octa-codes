import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './LoadingComponent.module.scss';
import Image from 'next/image';

const LoadingComponent = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the flashing logo
    gsap.to(logoRef.current, {
      opacity: 0,
      duration: 1,
      repeat: 5,  
      yoyo: true,
      ease: 'power1.inOut',
      onComplete: () => {
        // Optional: Hide the loader after the animation completes
        gsap.to(logoRef.current, { opacity: 0, duration: 0.5 });
      }
    });
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.logo} ref={logoRef}>
        <Image  src="/logo2.svg" width={200} height={200} alt="Loading Logo" />
      </div>
    </div>
  );
};

export default LoadingComponent;
