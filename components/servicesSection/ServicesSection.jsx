
import { Inter } from "next/font/google"
import styles from "./ServicesSection.module.scss"
import { servicesData } from "./servicesData"
import ServiceCard from "../serviceCard/ServiceCard"

const inter = Inter({subsets:["latin"]})
const ServicesSection = () => {
  return (
    <section className={`${styles.servicesSection} ${inter.className}`}>
      <div className={styles.sectionHeader}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.subtitle}>Empowering Innovation Through Tailored Tech Services</p>
      </div>
      <div className={styles.sectionContent}>
        {servicesData.map(item => {
          return <ServiceCard key={item.id} imgUrl={item.imgUrl} serviceTitle={item.title} serviceDescription={item.description} />
        })}
      </div>
      
    </section>
  )
}

export default ServicesSection