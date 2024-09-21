import { useEffect, useRef } from "react";
import styles from "./AboutSection.module.scss";
import Link from "next/link";

const AboutSection = () => {
  const aboutColRef = useRef(null);

  useEffect(() => {
    const loadGsap = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

      gsap.fromTo(
        aboutColRef.current, 
        {
          opacity: 0, 
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutColRef.current, // Trigger animation when the div comes into view
            start: "top 80%", // When the top of the element hits 80% of the viewport height
            end: "bottom 20%", // Optional: End animation when the bottom hits 20% of the viewport height
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
          },
        }
      );
    };

    loadGsap(); // Load GSAP when the component mounts
  }, []);

  return (
    <section id="about" className={styles.aboutSectionContainer}>
      <div ref={aboutColRef} className={styles.aboutCol}>
        <h2 className={styles.title}>About Octa</h2>
        <p className={styles.subtitle}>IT services & Solutions</p>
        <p className={styles.text}>
          At Octa, we are dedicated to transforming your digital landscape through innovative IT services,
          cutting-edge web and mobile development, and robust cybersecurity consulting. With a team of experienced professionals, 
          we specialize in crafting tailored solutions that drive growth, enhance security, and deliver exceptional user experiences.
        </p>
        <p className={styles.text}>
          Our core values revolve around innovation, client satisfaction, and a commitment to excellence.
          Whether you're looking to build a powerful web presence, develop intuitive mobile apps,
          or safeguard your business with top-tier cybersecurity, Octa has the expertise to make it happen.
        </p>
        <p className={styles.text}>
          With Octa by your side, you can focus on what you do best—while we take care of your digital needs.
        </p>
        <button className={`${styles.btn}`}>
          <Link href="#contact">Let's Plan Something</Link>
          </button>
      </div>
    </section>
  );
};

export default AboutSection;
