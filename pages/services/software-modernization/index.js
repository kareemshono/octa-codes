import { Inter } from "next/font/google";
import styles from "./SoftwareModernization.module.scss";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({subsets:["latin"]})
const SoftwareModernization = () => {
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
            title:"Avoid unpredictable costs",
            imgUrl:"/saveCost.svg",
            description:"Thanks to our fixed-price model, there are no unpleasant surprises. The costs remain the same, even if details change during the course of the project. We calculate the fixed price based on the scope of the project and the agreed requirements."
        },
        {id:3,
            title:"We build up know-how for you",
            imgUrl:"/knowHow.svg",
            description:"We take responsibility for your success. Octa provides you with a dedicated development team that works only on your project. They work deeply into your business logic, project goals and requirements - and build up project-specific know-how."
        },
        {id:4,
            title:"Benefit from smooth communication",
            imgUrl:"/smoothContact.svg",
            description:"Our team accompanies your project and ensures smooth communication. All Octa developers speak very good English and adapt to your meeting culture. The time difference to our offshore development team is only one hour."
        },
        {id:5,
            title:"Get experts on board",
            imgUrl:"/experts.svg",
            description:"TWe put together a team of IT experts for you. They bring exactly the expertise and experience needed for your project. All Octa developers have proven their expertise in demanding technical tests and interviews."
        },
    ]);
    const [activeCard, setActiveCard] = useState(null); // Track the active card's ID
    const Card = ({id,imgUrl,title,description}) => {
        const isActive = id === activeCard; // Check if this card is active
        return (
            <div onClick={() => setActiveCard(isActive ? null : id)}  className={styles.card}>
                <Image src={imgUrl} width={200} height={100} alt={title} />
                <p className={styles.title}>{title}</p>
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
            <title>Octa - Software Modernization</title>
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
        <section className={styles.bannerSec}>
            <div className={styles.colLeft}>
                <h1 className={styles.title}>Unleash the potential of your software, inspire your customers</h1>
                
            <p>To stay ahead of the competition, companies have to react quickly to market trends and customer wishes. Many business managers come to us because their software is throwing a spanner in the works:
                </p>
            <p>Customers wait months for new functions, small adjustments become a mammoth project. Old software systems with complex business logic slow down innovation and make it difficult to train new developers. </p>
            
            
            </div>
            <div className={styles.colRight}>
                <Image src={"/softModer.svg"} width={500} height={400} alt="vector"/>
            </div>
        </section>
        <section className={styles.text}>
            <div className={styles.textContainer}>
                <h1>Make your software ready for the future</h1>
                <p>With the Octa IT experts you modernize your software solution cost-efficiently and reliably.
                     You improve customer satisfaction, drive innovation and strengthen the competitiveness of your company.</p>
            </div>
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

        <section className={styles.advantages}>
            <div className={styles.header}>
            <div className={styles.textContainer}>
                <h1>Your advantages with Octa.</h1>
                <p>With Octa you develop innovative software solutions: Our teams of experts are highly qualified. They have the specialist knowledge and resources for your project. Our team in Octa support your project and ensure its success.</p>

            </div>
            </div>
            <div className={styles.grid}>
                {benefitsData?.map(data => {
                    return <Card key={data.id} id={data.id} title={data.title} imgUrl={data.imgUrl} description={data.description} />
                })}
            </div>
        </section>
        </main>
        </>
    )
}

export default SoftwareModernization;