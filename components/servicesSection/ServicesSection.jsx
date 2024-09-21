
import { Inter } from "next/font/google"
import styles from "./ServicesSection.module.scss"
import { servicesData } from "./servicesData"
import ServiceCard from "../serviceCard/ServiceCard"
import { useEffect, useRef } from "react"

const inter = Inter({subsets:["latin"]})
const ServicesSection = () => {
  const gridRef = useRef(null);
  const cardRefs = useRef([]); // Create refs for all the cards
  useEffect(() => {
    // Dynamically import gsap and ScrollTrigger
    const loadGsap = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      
      gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger with GSAP

      const cards = cardRefs.current;
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    loadGsap();
  }, []);
  
  return (
    <section id="services" className={`${styles.servicesSection} ${inter.className}`}>
      <div className={styles.sectionHeader}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.subtitle}>Empowering Innovation Through Tailored Tech Services</p>
      </div>
      <div ref={gridRef} className={styles.sectionContent}>
        {servicesData.map(item => {
          return <ServiceCard ref={(el) => (cardRefs.current[item.id] = el)} key={item.id} imgUrl={item.imgUrl} serviceTitle={item.title} serviceDescription={item.description} />
        })}
      </div>
      
    </section>
  )
}

export default ServicesSection