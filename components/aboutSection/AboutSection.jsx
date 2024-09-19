import styles from  "./AboutSection.module.scss"

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSectionContainer}>
        <div className={styles.aboutCol}>
          <h2 className={styles.title}>About Octa</h2>
          <p className={styles.subtitle}>IT services & Solutions</p>
          <p className={styles.text}>At Octa, we are dedicated to transforming your digital landscape through innovative IT services,
             cutting-edge web and mobile development, and robust cybersecurity consulting. With a team of experienced professionals, 
             we specialize in crafting tailored
             solutions that drive growth, enhance security, and deliver exceptional user experiences.</p>
          <p className={styles.text}>Our core values revolve around innovation, client satisfaction, and a commitment to excellence.
             Whether you're looking to build a powerful web presence, develop intuitive mobile apps,
             or safeguard your business with top-tier cybersecurity, Octa has the expertise to make it happen.</p>
          <p className={styles.text}>With Octa by your side, you can focus on what you do best—while we take care of your digital needs.</p>
              <button className={`${styles.btn}`}>Let's Plan Something</button>
        </div>
    </section>
  )
}

export default AboutSection