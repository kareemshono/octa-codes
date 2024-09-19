import PortfolioItem from "../portfolioItem/PortfolioItem"
import React from "react";
import styles from "./PortfolioSection.module.scss"
import { projects } from "./projects"

const PortfolioSection = () => {
  
  return (
    <section id="portfolio" className={styles.portfolioSectionContainer}>
        <div className={styles.header}>
            <h2 className={styles.title}>Projects We've Built</h2>
        </div>
        <div className={styles.content}>
          {projects.map(project => {
            return <PortfolioItem  key={project.id} imgUrl={project.imgUrl} title={project.title} type={project.type} description={project.description}/>
          })}
        </div>
        
    </section>
  )
}

export default PortfolioSection