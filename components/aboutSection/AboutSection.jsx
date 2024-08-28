import styles from  "./AboutSection.module.scss"

const AboutSection = () => {
  return (
    <section className={styles.aboutSectionContainer}>
        <div className={styles.aboutCol}>
          <h2 className={styles.title}>About Octa</h2>
          <p className={styles.subtitle}>IT services & Solutions</p>
          <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, culpa itaque, magni quam a perferendis 
            perspiciatis laborum maxime recusandae laboriosam sint minus? Sed dolor odit ea nostrum atque temporibus
             corrupti accusamus.Explicabo a esse, blanditiis,minus reprehenderit magnam ex debitis veritatis sit minima,
              inventore eligendi quam sapiente repellendus rem velit!</p>
              <button className={`${styles.btn}`}>Let's Plan Something</button>
        </div>
    </section>
  )
}

export default AboutSection