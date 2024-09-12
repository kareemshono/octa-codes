import Image from "next/image"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <section className={styles.footerSection}>
        <div className={styles.logoContainer}>
            <Image src={"/minilogo.svg"} width={50} height={50} />
        </div>
    </section>
  )
}

export default Footer