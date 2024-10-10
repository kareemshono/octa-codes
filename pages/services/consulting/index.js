import Head from "next/head";
import styles from "./Consulting.module.scss";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";


const inter = Inter({subsets:["latin"]})
const Consulting = () => {
    const [adviseData, setAdviseData] = useState([
        {id:0,
            title:"Tech Stack Assessment",
            imgUrl:"/techStack.svg",
            description:"Is your tech stack future-proof and flexible? - We assess the efficiency, security and scalability of your tech stack and check whether you can easily integrate third-party services and APIs if required.We evaluate whether your technology selection is suitable for your project and enables efficient, fast and error-free updates (continuous integration and continuous deployment)."
        },
        {id:1,
            title:"Infrastructure and Operations Assessment",
            imgUrl:"/infrus.svg",
            description:"We check your hosting environment and infrastructure. We focus on topics such as disaster recovery, data backup strategies and real-time monitoring of systems to ensure their stability and reliability.We also check the consistency of the design documentation to ensure smooth expansion and adaptation in the future."
        },
        {id:2,
            title:"Software architecture assessment",
            imgUrl:"/softwareArch.svg",
            description:"We check whether your software architecture fits your goals and is future-proof. Our assessment covers topics such as the scalability and flexibility of the architecture."
        },
        {id:3,
            title:"Assessment of your software modernization",
            imgUrl:"/assessment.svg",
            description:"You want to modernize your software and prepare it optimally for current and future requirements? Based on our Octa assessment, you can make well-founded decisions for your migration project.The assessment ensures that the modernization measures are in line with the business objectives, optimize performance, improve security and use resources efficiently."
        },
        {id:4,
            title:"Scalability Assessment",
            imgUrl:"/scalability.svg",
            description:"Can your software keep pace with growing requirements and loads? With this assessment, you ensure that your software will continue to function efficiently and error-free in the future and can be developed flexibly.We carry out a comprehensive analysis and test the performance under various conditions. This allows us to identify weaknesses and define optimization potential"
        },
        {id:5,
            title:"Cyber Security Consulting",
            imgUrl:"/cyberSecurity.svg",
            description:"Protect your business with expert cybersecurity consulting.At Octa, we help you identify vulnerabilities, implement robust security measures, and stay ahead of evolving threats. Safeguard your data and ensure compliance with our tailored cybersecurity strategies."
        },
    ]);
    const [activeCard, setActiveCard] = useState(null); // Track the active card's ID
    const Card = ({id,imgUrl,title,description}) => {
        const isActive = id === activeCard; // Check if this card is active
        return (
            <div onClick={() => setActiveCard(isActive ? null : id)}  className={styles.card}>
                    <div className={styles.header}>
                    <Image src={imgUrl} width={200} height={100} alt={`data ${title}`} />
                    </div>
                    <div className={styles.text}>
                    <p className={styles.title}>{title}</p>
                    </div>
                   
                
                {isActive && 
          <div className={`${styles.description}`}>
            <p>{description}</p>
          </div>
        }      
            </div>
        )
    }


    return(
        <>
        <Head>
            <title>
                Octa - Consulting
            </title>
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
        <section className={styles.bannerSec}>
        <div className={styles.colLeft}>
                <h1 className={styles.title}>Lay the foundation for a <span>successful </span> software solution & Get a professional recommendation for your project</h1>
                
            <p>Many companies lack the time or expertise to approach and implement new software projects professionally.
                </p>
                <p>
                At Octa, our IT consulting services ensure you get the right technology, strategy, and implementation plan to meet your business goals. Let us handle the details while you focus on growth and innovation.
                </p>
               
            
            
            </div>
            <div className={styles.colRight}>
                <Image src={"/consulting.svg"} width={400} height={300} alt="consulting vector" />
            </div>
        </section>
        <section className={styles.header}>
            <h1>At the beginning of a software development project, it is important to define the framework:</h1>
            <ul>
                <li><p>Which technical approach is the right one?</p></li>
                <li><p>What expertise is required?</p></li>
                <li><p>How much will the project cost?</p></li>
                <li><p>What does the project roadmap look like?</p></li>
            </ul>
            <p>With our Tech Assessment Workshop, you can clarify these questions and set up your software project professionally.</p>
            <p className={styles.bold}>
            This is what your individual tech assessment contains:
            </p>
            <ul>
                <li><p>A professional assessment of your software project</p></li>
                <li><p>Technical recommendations for the next steps</p></li>
                <li><p>An effort estimate including costs, time frame and required expertise</p></li>
                
            </ul>
        </section>
        <section className={styles.advise}>
            <div className={styles.header}>
            <h1>We advise you on your challenge</h1>
            <p>Octa offers both project-specific and topic-specific assessments. Our IT experts work intensively with you. You receive a customized analysis and professional recommendations. What challenge are you facing?</p>
            </div>
          <div className={styles.grid}>
          {adviseData?.map(data => {
                    return <Card key={data.id} id={data.id} title={data.title} imgUrl={data.imgUrl} description={data.description} />
                })}
          </div>
        </section>
        <section className={styles.process}>
            <div className={styles.header}>
                <h1>Octa Tech Assessment process</h1>
                <p>In our Tech Assessment Workshop, we bring your tech team and the Octa IT experts together.</p>
                <p className={styles.bold}>The focus is on these topics:</p>
                <ul>
                    <li><p>Your business case and technical vision</p></li>
                    <li><p>The software system, the system landscape and the technologies used</p></li>
                    <li><p>The development process up until now</p></li>
                </ul>
            </div>
        </section>
        <section className={styles.steps}>
        <div className={styles.step}>
                    <Image src={"/three.svg"} width={100} height={100} alt="number" />
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight} alt="right arrow"/>
                    <h2 className={styles.title}>Preliminary analysis of your project</h2>
                    <p>Octa IT experts familiarize themselves intensively with your software project.</p>
                    <p>We create an initial analysis and identify relevant topics for the joint tech assessment workshop.</p>
                    
                </div>
        <div className={styles.step}>
                    <Image src={"/three.svg"} width={100} height={100} alt="number"/>
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight} alt="right arrow" />
                    <h2 className={styles.title}>Tech Assessment Workshop</h2>
                    <p>Octa IT experts work with your tech team to identify the potential and challenges of the project and develop solutions.</p>
                    <p>We develop a common understanding of the technical requirements.</p>
                    <p>You get to know our team and our way of working.</p>
                    
                </div>
        <div className={styles.step}>
                    <Image src={"/three.svg"} width={100} height={100} alt="number" />
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight} alt="right arrow" />
                    <h2 className={styles.title}>Tech Assessment Report</h2>
                    <p>Based on the results of the workshop, our experts prepare a detailed tech assessment report for your project.</p>
                    <p>It contains a professional assessment of your project, technical recommendations for the next steps and a cost estimate including costs, time frame and required expertise.</p>
                    
                </div>
        </section>
        </main>
        </>
    )
}

export default Consulting;