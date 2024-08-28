import Image from "next/image"
import styles from "./ServiceCard.module.scss"

const ServiceCard = ({imgUrl,serviceTitle,serviceDescription}) => {
  return (
    <div className={styles.serviceCardCotnainer}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className={styles.cardImage}>
            <Image src={imgUrl} width={300} height={150} />
        </div>
        <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{serviceTitle}</h2>
            <p className={styles.cardDescription}>
                {serviceDescription}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard