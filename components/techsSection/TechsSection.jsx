import { Inter } from "next/font/google";
import ParticlesBackground from "../particles/ParticlesBackground"
import styles from "./TechsSection.module.scss";
import Image from "next/image";

const inter = Inter({subsets:["latin"]})

const TechsSection = () => {
  return (
    <section id="techs" className={`${styles.techsSectionContainer} ${inter.className}`}>
        <ParticlesBackground />
        <div className={styles.clip}>
            <div className={styles.clipText}>
            <h1>
                Technologies we use
            </h1>
            <p className={styles.subtitle}>Powering Innovation with Cutting-Edge Tools</p>
           
            </div>
            <div className={styles.clipContent}>
                <Image src="/nextJs.svg" width={50} height={50} alt="tech icon" />
                <Image src="/react.svg" width={50} height={50} alt="tech icon" />
                <Image src="/ts.svg" width={50} height={50} alt="tech icon" />
                <Image src="/node.svg" width={50} height={50} alt="tech icon" />
                <Image src="/laravel.svg" width={50} height={50} alt="tech icon" />
                <Image src="/postqres.svg" width={50} height={50} alt="tech icon" />
                <Image src="/mysql.svg" width={50} height={50} alt="tech icon" />
                <Image src="/flutter.svg" width={50} height={50} alt="tech icon" />
                <Image src="/firebase.svg" width={50} height={50} alt="tech icon" />
                
                <Image src="/mongodb.svg" width={50} height={50} alt="tech icon" />
                <Image src="/xd.svg" width={50} height={50} alt="tech icon" />
                <Image src="/ps.svg" width={50} height={50} alt="tech icon" />
                <Image src="/ai.svg" width={50} height={50} alt="tech icon" />
                <Image src="/figma.svg" width={50} height={50} alt="tech icon" />
                <Image src="/sass.svg" width={50} height={50} alt="tech icon" />
                <Image src="/wordpress.svg" width={50} height={50} alt="tech icon" />
                
                <Image src="/azure.svg" width={50} height={50} alt="tech icon" />
                <Image src="/aws.svg" width={50} height={50} alt="tech icon" />

            </div>
            <p className={styles.para}>Our projects are powered by cutting-edge technologies, ensuring reliability, scalability, and <br />  high performance. From modern front-end 
            frameworks to  robust back-end solutions, <br /> we utilize the best tools to deliver exceptional results.</p>
            
        </div>
    </section>
  )
}

export default TechsSection