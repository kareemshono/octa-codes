import { Inter } from "next/font/google";
import ParticlesBackground from "../particles/ParticlesBackground"
import styles from "./TechsSection.module.scss";
import Image from "next/image";

const inter = Inter({subsets:["latin"]})

const TechsSection = () => {
  return (
    <section className={`${styles.techsSectionContainer} ${inter.className}`}>
        <ParticlesBackground />
        <div className={styles.clip}>
            <div className={styles.clipText}>
            <h1>
                Technologies
            </h1>
            <h1>
               That We
            </h1>
            <h1>
                Use
            </h1>
            </div>
            <div className={styles.clipContent}>
                <Image src="/nextJS.svg" width={75} height={75} />
                <Image src="/react.svg" width={75} height={75} />
                <Image src="/ts.svg" width={75} height={75} />
                <Image src="/node.svg" width={75} height={75} />
                <Image src="/laravel.svg" width={75} height={75} />
                <Image src="/postqres.svg" width={75} height={75} />
                <Image src="/mysql.svg" width={75} height={75} />
                <Image src="/flutter.svg" width={75} height={75} />
                <Image src="/firebase.svg" width={75} height={75} />
                
                <Image src="/mongodb.svg" width={75} height={75} />
                <Image src="/xd.svg" width={75} height={75} />
                <Image src="/ps.svg" width={75} height={75} />
                <Image src="/ai.svg" width={75} height={75} />
                <Image src="/figma.svg" width={75} height={75} />
                <Image src="/sass.svg" width={75} height={75} />
                <Image src="/wordpress.svg" width={75} height={75} />
                
                <Image src="/azure.svg" width={75} height={75} />
                <Image src="/aws.svg" width={75} height={75} />
                <p className={styles.para}>Our projects are powered by cutting-edge technologies, ensuring reliability, scalability, and <br />  high performance. From modern front-end 
                    frameworks to  robust back-end solutions, <br /> we utilize the best tools to deliver exceptional results.</p>
            </div>
           
        </div>
    </section>
  )
}

export default TechsSection