import Image from "next/image"
import styles from "./ServiceCard.module.scss"
import React from "react"
import { useRouter } from "next/router"

const ServiceCard = React.forwardRef (({imgUrl,serviceTitle,url,serviceDescription},ref) => {
  const router = useRouter();
  const navigate = (url) => {
    console.log("Navigating to:", url); // Log the URL for debugging
    if (url) {
      router.push(url);
    } else {
      console.error("Invalid URL provided.",url);
    }
  };
  return (
    <div onClick={() => navigate(url)} ref={ref} className={styles.serviceCardCotnainer}>
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