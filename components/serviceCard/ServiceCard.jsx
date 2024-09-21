import Image from "next/image"
import styles from "./ServiceCard.module.scss"
import React from "react"

const ServiceCard = React.forwardRef (({imgUrl,serviceTitle,serviceDescription},ref) => {
  return (
    <div ref={ref} className={styles.serviceCardCotnainer}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className={styles.cardImage}>
            <Image  src={imgUrl} width={300} height={150} alt={serviceTitle}  quality={75} // Adjust the quality level to reduce size while maintaining a good look
  priority   />
        </div>
        <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{serviceTitle}</h2>
            <p className={styles.cardDescription}>
                {serviceDescription}
            </p>
        </div>
    </div>
  )
})
// Add displayName for React DevTools (optional but helpful for debugging)
ServiceCard.displayName = "ServiceCard";
export default ServiceCard