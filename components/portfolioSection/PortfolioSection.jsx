import PortfolioItem from "../portfolioItem/PortfolioItem"
import React, { useEffect, useRef } from "react";
import styles from "./PortfolioSection.module.scss"
import { projects } from "./projects"

const PortfolioSection = () => {
  const gridRef2 = useRef(null);
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
            trigger: gridRef2.current,
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
    <section ref={gridRef2} id="portfolio" className={styles.portfolioSectionContainer}>
        <div className={styles.header}>
            <h2 className={styles.title}>Projects We've Built</h2>
            <p className={styles.subtitle}>Showcasing Our Expertise and Craftsmanship</p>
        </div>
        <div  className={styles.content}>
          {projects.map(project => {
           
            return  <PortfolioItem ref={(el) => (cardRefs.current[project.id] = el)}  key={project.id} imgUrl={project.imgUrl} title={project.title} type={project.type} description={project.description}/>
          })}
        </div>
        
    </section>
  )
}

export default PortfolioSection