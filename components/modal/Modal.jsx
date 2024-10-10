import Image from "next/image"
import styles from "./Modal.module.scss"
import Link from "next/link"

const Modal = ({setShowModal,title,type,imgUrl,description}) => {
  return (
    <section className={styles.modalSection}>
        <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
                <span onClick={() => setShowModal(false)}>&#10006;</span>
            </div>
            <div className={styles.modalBody}>
                <div className={styles.colLeft}>
                    <Image style={{boxShadow:"0px 0px 10px #1206426d"}} src={imgUrl} width={500} height={300} alt={"vector"} />
                </div>
                <div className={styles.colRight}>
                    <h1>{title}</h1>
                    <p>{type}</p>
                    <div className={styles.description}>
                        <p>
                            {description}
                        </p>
                        <Link href="/" className={styles.btn} >Visit Website</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Modal