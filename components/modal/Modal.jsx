import styles from "./Modal.module.scss"

const Modal = ({setShowModal,title,type}) => {
  return (
    <section className={styles.modalSection}>
        <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
                <span onClick={() => setShowModal(false)}>&#10006;</span>
            </div>
            <div className={styles.modalBody}>
                <div className={styles.colLeft}>

                </div>
                <div className={styles.colRight}>
                    <h1>{title}</h1>
                    <p>{type}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Modal