import Head from "next/head"
import styles from "./TeamExtension.module.scss"
import Image from "next/image"
import { Inter } from "next/font/google"
import { useEffect, useRef, useState } from "react";

const inter = Inter({subsets:["latin"]});
//card

//end-card
const TeamExtension = () => {
    const [outsourceData, setOutsourceData] = useState([
        {id:0,
            title:"Analysis & requirements definition",
            imgUrl:"/analysis.svg",
            description:"We start every project with a detailed analysis of your needs. In our Tech Assessment Workshop we define the requirements for the software together.This is how we ensure that our solution is perfectly tailored to your goals."
        },
        {id:1,
            title:"Technical concept & project roadmap",
            imgUrl:"/roadmap.svg",
            description:"Our experts develop a tailor-made technical concept and a project roadmap.We rely on the best technologies and innovative development methods. This gives you a flexible and future-proof solution.."
        },
        {id:2,
            title:"Software development",
            imgUrl:"/webdev.svg",
            description:"A dedicated Octa development team implements your software solution.An Octa engineering manager coordinates the team, ensuring consistently high performance and documenting development progress."
        },
        {id:3,
            title:"Technical project management",
            imgUrl:"/manage.svg",
            description:"An experienced Octa engineering manager will take charge of your project and ensure that it runs smoothly, keeping you continuously informed about the progress of development and ensuring that the schedule is adhered to."
        },
        {id:4,
            title:"Quality assurance & testing",
            imgUrl:"/testing.svg",
            description:"We develop software according to high quality standards. Our Head of Software Development in Octa sets high standards in our quality assurance and ensures that our team lives up to them.He is supported by his team leaders and specially trained experts on site."
        },
        {id:5,
            title:"Support & Maintenance",
            imgUrl:"/maintenance.svg",
            description:"Our support and maintenance service ensures that your software is always up to date and runs smoothly.A modern software system must constantly evolve as the digital ecosystem changes. Your Octa team will be happy to support you with the expertise it has built up for your project."
        },
    ])
    const gridRef = useRef(null);
    const cardRefs = useRef([]); // Create refs for all the cards
    
    const [activeCard, setActiveCard] = useState(null); // Track the active card's ID
    const Card = ({id,imgUrl,title,description}) => {
        const isActive = id === activeCard; // Check if this card is active
        return (
            <div 
            ref={(el) => (cardRefs.current[id] = el)}
            onClick={() => setActiveCard(isActive ? null : id)}  className={styles.card}>
                <Image src={imgUrl} width={200} height={100} alt={title}/>
                <p className={styles.title}>{title}</p>
                {isActive && 
          <div className={`${styles.description}`}>
            <p>{description}</p>
          </div>
        }      
            </div>
        )
    }
    useEffect(() => {
        // Dynamically import gsap and ScrollTrigger
        const loadGsap = async () => {
          const { default: gsap } = await import("gsap");
          const { ScrollTrigger } = await import("gsap/ScrollTrigger");
          
          gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger with GSAP
    
          const cards = cardRefs.current;
          gsap.fromTo(
            cards,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        };
    
        loadGsap();
      }, []);
  return (
    <>
    <Head>
        <title>Octa - Team Extension</title>
    </Head>
    <main className={`${styles.main} ${inter.className}`}>
        <section className={styles.bannerSec}>
            <div className={styles.colLeft}>
                <h1 className={styles.title}>Team Expansion or Outsourcing:</h1>
                <h2 className={styles.subtitle}>Choose a service model & get started</h2>
            <p>With all our service models, the responsibility for your success lies with our team </p>
            <p>With Octa as your business contractual partner, you benefit from the advantages of
                 offshore software development , 100% reliable and secure.</p>
            <p>Our remote software development experts build the bridge between you and our development team from Darmstadt:</p>
            
            </div>
            <div className={styles.colRight}>
                <Image src={"/teamexbanner.svg"} width={600} height={400} alt="vector" />
            </div>
        </section>
        <section className={styles.modelsSec}>
            <div className={styles.header}>
                <h1>Our service models for your success</h1>
                <p>Achieve your goals with our qualified offshore development teams - 
            expand your development team or outsource a project. With both service models, 
            all rights to the developed source code remain with your company. <br/>
            You are unsure which model fits best to your project? - Book a free consultation now!</p>
            </div>
            <div className={styles.body}>
                <div className={styles.colLeft}>
                    <Image src={"/teamEx.svg"} width={200} height={100} alt="vector" />
                    <h2>Team extension</h2>
                    <p className={styles.subtitle}>Your tech team works directly with the Octa developers. Your Product Owner/CTO coordinates the development team.</p>
                    <div className={styles.list}>
                    <ul>
                        <li>
                            <p>Our Tech Assessment Workshop lays the foundation for a successful collaboration.</p>
                        </li>
                        <li>
                            <p>We will put together a dedicated team of Octa IT experts for you in 4 to 6 weeks.</p>
                        </li>
                        <li>
                            <p>We organize the onboarding for your project and set up processes for successful collaboration.</p>
                        </li>
                        <li>
                            <p>The Octa team works in your development and communication environment (language: English).</p>
                        </li>
                        <li>
                     <p>Your contact person supports the collaboration and ensures its success (communication: English).</p>   
                        </li>
                        <li>
                            <p>We train new team members and build up know-how for your business case.</p>
                        </li>
                        <li>
                            <p>Octa Satisfaction Guarantee</p>
                        </li>
                        <li>
                            <p>Contract according to the law</p>
                        </li>
                    </ul> </div>
                 
                </div>
                <div className={styles.colRight}>
                <Image src={"/outsource.svg"} width={200} height={100} alt="vector" />
                    <h2>Outsourcing</h2>
                    <p className={styles.subtitle}>We implement your software project - from concept to go-live. Octa takes over the technical project management.</p>
                    <div className={styles.list}>
                    <ul>
                        <li>
                            <p>You receive an offer including costs, time frame and required expertise </p>
                        </li>
                        <li>
                            <p>We develop the technical concept and the project roadmap (including prototype if required).</p>
                        </li>
                        <li>
                            <p>We manage the development from concept to release (agile working method in sprints).</p>
                        </li>
                        <li>
                            <p>You receive regular updates on the progress of the project and can provide feedback.</p>
                        </li>
                        <li>
                        <p>Regular releases are possible.
                        </p>
                        </li>
                        <li>
                            <p>We are responsible for quality assurance and software testing.</p>
                        </li>
                        <li>
                            <p>Project responsibility in Octa, Your contact person accompanies the project and ensures its success (communication:  English).</p>
                        </li>
                        <li>
                            <p>Support, maintenance and further development after project completion</p>
                        </li>
                        <li>
                            <p>Contract according to the law</p>
                        </li>
                    </ul> </div>
                 
            
                </div>
            </div>
        </section>
        <section className={styles.teamEx}>
            <div className={styles.header}>
                <h2 className={styles.title}>Get started together and achieve results quickly</h2>
                <p>With our "team extension" service model, you accelerate your software projects - <br />
                 while retaining full control over the development process.
                 Your dedicated Octa development team works closely with your in-house team. <br />
                  We rely on our tried-and-tested onboarding process to
                ensure that you get off to a successful start together and achieve results quickly:</p>
            </div>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <Image src={"/one.svg"} width={100} height={100} alt="number"/>
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight} alt="arrow right"/>
                    <h2 className={styles.title}>Setting goals for the collaboration</h2>
                    <p>We attach great importance to recording our customers' expectations of the collaboration right from the start and communicating them to the entire team.</p>
                    <p>For example, a joint project roadmap with clearly defined milestones is suitable for this.</p>
                    <p>We also make sure that both teams know what the collaboration processes should look like. This ensures that everything runs smoothly right from the start.</p>
                </div>
                <div className={styles.step}>
                    <Image src={"/two.svg"} width={100} height={100} alt="number"/>
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight} alt="arrow right"/>
                    <h2 className={styles.title}>Getting to know your domain</h2>
                    <p>We ensure that our development team has a deep understanding of your business case.</p>
                    <p>The Octa IT experts familiarize themselves comprehensively with your business logic, the requirements for your software, its technical and content context and the end users.</p>
                    <p>In this way, the Octa experts become sparring partners for your team and create real added value.</p>
                </div>
                <div className={styles.step}>
                    <Image src={"/three.svg"} width={100} height={100}alt="number" />
                    <Image src={"/arrowRight.svg"} width={50} height={50} className={styles.arrowRight} alt="arrow right"/>
                    <h2 className={styles.title}>Establishing successful communication</h2>
                    <p>Effective communication is the key to every successful project.</p>
                    <p>We work with you to define the communication channels and tools, select suitable meeting formats and determine the frequency and reporting requirements.</p>
                    <p>We focus on the needs of our customers and are happy to advise you.</p>
                </div>
                <div className={styles.step}>
                    <Image src={"/four.svg"} width={100} height={100} alt="number"/>
                    <h2 className={styles.title}>Technical onboarding</h2>
                    <p>To enable efficient collaboration, the Octa IT experts need access to your development environment, your communication tools, your ticket system and other relevant tools.</p>
                    <p>During technical onboarding, we support you with our checklists and ensure that we think of everything right from the start.</p>
                    <p>Your project will get off to a successful start and you will quickly see the first results.</p>
                </div>
            </div>
        </section>
        <section className={styles.ourModel}>
        <div className={styles.header}>
                <h2 className={styles.title}>You save your budget. We ensure your quality standards.</h2>
                <p>Do you want to expand your development capacities flexibly and cost-effectively with external IT experts - 
                    but you have had bad experiences with freelancers or foreign service providers?</p>
                    <p>With Octa you can reliably strengthen your team and rely on global quality standards.</p>
                    <p>Our team of IT experts at our development site has the expertise for your project - 
                        our team in Octa ensures the success of the collaboration.Your in-house IT team will
                         work closely with one of our dedicated offshore development teams 
                        - our team will guide the collaboration and ensure your success.</p>
                        <p className={styles.bold}>We ensure smooth communication</p>
                        <ul>
                            <li>
                                <p>Our Customer Relations Management in Octa organizes the onboarding of the developers in your project.</p>
                            </li>
                            <li>
                                <p>We set up processes and tools for successful collaboration. We take into account the preferences of your in-house team and the existing communication and development environment.</p>
                            </li>
                            <li>
                                <p>We are in contact with your in-house IT team and the Octa development team and ensure that both teams know how to work together optimally and what goals they are pursuing together.</p>
                            </li>
                            <li>
                                <p>We support the collaboration. We are always there for our customers if they have any questions or problems.</p>
                            </li>
                        </ul>
                        {/* second list  */}
                        <p className={styles.bold}>We guarantee high software quality</p>
                        <ul>
                            <li>
                                <p>Our experts of Software Development in Octa manages our offshore development team together with each other on site.</p>
                            </li>
                            <li>
                                <p>The experienced system architects ensure that our project teams develop high-quality software according to global standards.</p>
                            </li>
                            <li>
                                <p>The software development management also monitors the performance of the Octa developers and the quality of their work.</p>
                            </li>
                            <li>
                                <p>We train new team members in the Western work culture. This is how we build the cultural bridge for our customers.</p>
                            </li>
                        </ul>
            </div>
        </section>
        <section className={styles.outsourcing}>
        <div className={styles.header}>
                <h1>Outsourcing with Octa</h1>
                <p>This service model is suitable for you if your team does not have the capacity or know-how to take over <br />
                     the technical project management and coordinate the development team.</p>
            </div>
            <div ref={gridRef} className={styles.grid}>
                {outsourceData?.map(card => {
                    return <Card   key={card.id} id={card.id} title={card.title} imgUrl={card.imgUrl} description={card.description} />
                })}
            </div>
            <div className={styles.outsourceContainer}>
                <div className={styles.outsource}>
                <h2 className={styles.title}>Our team in Octa ensures your success</h2>
                <p className={styles.bold}>We ensure smooth communication</p>
                <p>Do you want to expand your development capacities flexibly and cost-effectively with external IT experts - 
                    but you have had bad experiences with freelancers or foreign service providers?</p>
                    <p>With Octa you can reliably strengthen your team and rely on global quality standards.</p>
                    <p>Our team of IT experts at our development site has the expertise for your project - 
                        our team in Octa ensures the success of the collaboration.Your in-house IT team will
                         work closely with one of our dedicated offshore development teams 
                        - our team will guide the collaboration and ensure your success.</p>
                        <p className={styles.bold}>We ensure smooth communication</p>
                        <ul>
                            <li>
                                <p>Our Customer Relations Management in Octa organizes the onboarding of the developers in your project.</p>
                            </li>
                            <li>
                                <p>We set up processes and tools for successful collaboration. We take into account the preferences of your in-house team and the existing communication and development environment.</p>
                            </li>
                            <li>
                                <p>We are in contact with your in-house IT team and the Octa development team and ensure that both teams know how to work together optimally and what goals they are pursuing together.</p>
                            </li>
                            <li>
                                <p>We support the collaboration. We are always there for our customers if they have any questions or problems.</p>
                            </li>
                        </ul>
                        {/* second list  */}
                        <p className={styles.bold}>We guarantee high software quality</p>
                        <ul>
                            <li>
                                <p>Our experts of Software Development in Octa manages our offshore development team together with each other on site.</p>
                            </li>
                            <li>
                                <p>The experienced system architects ensure that our project teams develop high-quality software according to global standards.</p>
                            </li>
                            <li>
                                <p>The software development management also monitors the performance of the Octa developers and the quality of their work.</p>
                            </li>
                            <li>
                                <p>We train new team members in the Western work culture. This is how we build the cultural bridge for our customers.</p>
                            </li>
                        </ul>
                        </div>
            </div>
        </section>
     
    </main>
    </>
  )
}

export default TeamExtension