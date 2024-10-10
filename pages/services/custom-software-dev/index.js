import Head from "next/head";
import styles from "./CustomSoftware.module.scss"
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({subsets:["latin"]})
const CustomSoftware = () => {
    const [benefitsData, setBenefitsData] = useState([
        {id:0,
            title:"Save costs - while maintaining high quality",
            imgUrl:"/cost.svg",
            description:"Thanks to our development team in Damascus, you benefit from attractive prices. Our team in Darmstadt ensures our high quality standards - together with the team leaders on site in Syria."
        },
        {id:1,
            title:"Team dedicated to only your project",
            imgUrl:"/team.svg",
            description:"Your dedicated development team only works on your project. They familiarize themselves with your business logic, project goals and requirements - and build up project-specific expertise. In Darmstadt, we take responsibility for your success."
        },
        {id:2,
            title:" contact person & contract",
            imgUrl:"/deal.svg",
            description:"We take on project responsibility in Octa. Our team in Octa will support your project and ensure high software quality and successful collaboration. You have a contact person to collaborate and receive a contract"
        },
        {id:3,
            title:"We build up know-how for you",
            imgUrl:"/knowHow.svg",
            description:"Is your business logic complex? No problem. We build up long-term expertise for your company - independently of individual developers. To do this, we form a dedicated team of at least two developers. Our experts provide comprehensive training for new team members."
        },
        {id:4,
            title:"Keeping costs under control",
            imgUrl:"/saveCost.svg",
            description:"Thanks to our fixed-price model, there are no unpleasant surprises. The costs remain the same, even if details change during the course of the project. We calculate the fixed price based on the scope of the project and the agreed requirements."
        },
        {id:5,
            title:"Cost of Custom Software",
            imgUrl:"/softwareCost.svg",
            description:"The price depends on your requirements. We will be happy to make you an offer."
        },
    ]);
    const [activeCard, setActiveCard] = useState(null); // Track the active card's ID
    const Card = ({id,imgUrl,title,description}) => {
        const isActive = id === activeCard; // Check if this card is active
        return (
            <div onClick={() => setActiveCard(isActive ? null : id)}  className={styles.card}>
                <div className={styles.header}>
                <Image src={imgUrl} width={100} height={100} alt={`${title}`} />
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
            <title>Octa - Custom Software Development</title>
        </Head>
         <main className={`${styles.main} ${inter.className}`}>
         <section className={styles.bannerSec}>
            <div className={styles.colLeft}>
                <h1 className={styles.title}>Customized <span>software</span>  solutions from a personal team of experts</h1>
                
            <p>A dedicated team of octa developers will delve deep into your business logic and your goals. This is how we at Octa develop 
                software solutions that advance your company and are successful in the long term. </p>
            <p>With Octa as your business contractual partner, you benefit from the advantages of
                 offshore software development , 100% reliable and secure.</p>
            <p>Our remote software development experts build the bridge between you and our development team from Darmstadt:</p>
            
            </div>
            <div className={styles.colRight}>
                <Image src={"/customSoft.svg"} priority width={500} height={300} alt="vector" />
            </div>
        </section>
        <section className={styles.header}>
            <h1>Customized software solutions from a personal team of experts</h1>
            <p>A dedicated team of Octa developers will delve deep into your business logic and your goals. This is how we at Octa 
                develop software solutions that advance your company and are successful in the long term.</p>
                <ul>
                    <li>
                        <p>Flexible and future-proof software</p>
                    </li>
                    <li>
                        <p>Modern technologies</p>
                    </li>
                    <li>
                        <p>At a guaranteed fixed price</p>
                    </li>
                </ul>
                <p>We put together a dedicated team of developers. They only work on your project. You benefit
                     from our expertise and a quick project start.</p>
                <p>Our team in Octa supports the project and ensures its success. Your personal contact will keep you regularly informed about the progress of the project.</p>
        </section>
        <section className={styles.service}>
            <div className={styles.colLeft}>
                <h2>Free Consultation</h2>
                <p>You will receive a professional assessment of your software project from our experts.</p>
                <button>Submit Request</button>
            </div>
            <div className={styles.colRight}>
                <Image src={"/service.svg"} width={400} height={400} alt="consulting vector" />
            </div>
        </section>
        <section className={styles.expertise}>
            <h1 className={styles.title}>Specializing in custom software - for more than 10 years</h1>
            <p>For more than ten years, we have developed numerous customized software solutions for medium-sized companies and start-ups.
                 Our teams of IT experts can also turn your vision into software.</p>
                 <p className={styles.bold}>What makes custom software successful?</p>
                 <p>✓ It is tailored to the unique requirements and goals of your company. <br />
                 ✓ It is scalable and flexible. This makes customized software successful in the long term.</p>
                 <p>With customized software, you can optimally support your business processes and increase the efficiency and competitiveness of your company.</p>
        </section>
        <section className={styles.grid}>
            <div className={styles.card}>
                <Image src={"/cloudWeb.svg"} height={150} width={200}  alt="vector"/>
                <h2>Mobile Apps, Web Apps & Cloud Solutions</h2>
            </div>
            <div className={styles.card}>
                <Image src={"/network.svg"} height={150} width={200}  alt="vector"/>
                <h2>Network Architecure</h2>
            </div>
            <div className={styles.card}>
                <Image src={"/ui2.svg"} height={150} width={200}  alt="vector"/>
                <h2>Interfaces to ERP, CRM & e-commerce systems</h2>
            </div>
            <div className={styles.card}>
                <Image src={"/custom.svg"} height={150} width={200}  alt="vector"/>
                <h2>Custom Software Solutions</h2>
            </div>
        </section>
        <section className={styles.textCenter}>
            <h1>When is customized software worth it?</h1>
            <ul>
                <li><p>You have complex requirements that standard software does not cover.</p></li>
                <li><p>You want to increase sales with your own software solution.</p></li>
                <li><p>You need to replace an existing application.</p></li>
                <li><p>You need unrestricted ownership and usage rights.</p></li>
            </ul>
        </section>

        <section className={styles.advantages}>
            <div className={styles.header}>
                <h1>Your advantages with Octa.</h1>
                <p>With Octa you develop innovative software solutions: Our teams of experts are highly qualified. They have the specialist knowledge and resources for your project. Our team in Octa support your project and ensure its success.</p>
            </div>
            <div className={styles.grid}>
                {benefitsData?.map(data => {
                    return <Card key={data.id} id={data.id} title={data.title} imgUrl={data.imgUrl} description={data.description} />
                })}
            </div>
        </section>
        <section className={styles.stepsSection}>
            <div className={styles.header}>
                <h1>4 steps to a customized software solution</h1>
                <p>Experienced Octa IT experts develop your customized software - at a guaranteed fixed price.
                     Modern methods and technologies ensure that you receive a flexible and future-proof solution.</p>
            </div>
            <div className={styles.body}>
            <div className={styles.step}>
                    <Image src={"/one.svg"} width={100} height={100}alt="number" />
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight} alt="arrow right" />
                    <h2 className={styles.title}>No-obligation consultation</h2>
                    <p>You will receive a professional assessment of your software project. Our experts will advise you on how to tackle the project successfully.</p>
                    
                </div>
                <div className={styles.step}>
                    <Image src={"/two.svg"} width={100} height={100}alt="number" />
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight} alt="arrow right" />
                    <h2 className={styles.title}>Free quote & roadmap</h2>
                    <p>Octa IT experts analyze your requirements.</p>
                    <p>Within a few days, you will receive a free cost estimate including a roadmap for your project.</p>

                </div>
                <div className={styles.step}>
                    <Image src={"/three.svg"} width={100} height={100} alt="number"/>
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight}  alt="arrow right"/>
                    <h2 className={styles.title}>Technical concept</h2>
                    <p>If you decide to implement your project with us, the first thing we do is work out the technical concept.</p>
                    <p>A well thought-out technical concept is the basis for a flexible, future-proof solution. You benefit from our many years of experience and modern technologies.</p>
                    
                </div>
                <div className={styles.step}>
                    <Image src={"/four.svg"} width={100} height={100} alt="number"/>
                    <h2 className={styles.title}>Agile development of your software</h2>
                    <p>We are responsible for and manage the development of your software until it goes live.</p>
                    <p>You will receive regular updates on the progress of the project. Regular releases are also possible.</p>

                </div>
            </div>
        </section>
        </main>
        </>
       
    )
}

export default CustomSoftware;