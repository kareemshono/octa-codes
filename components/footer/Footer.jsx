import Image from "next/image"
import styles from "./Footer.module.scss"
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({subsets:["latin"]})
const Footer = () => {
  return (
    <section className={styles.footerSection}>
        {/* <div className={styles.logoContainer}>
            <Image src={"/minilogo.svg"} width={50} height={50} />
            <p>OCTA</p>
        </div> */}
        <div className={`${styles.container} ${inter.className}`}>
            <div className={styles.quickLinks}>
                <h3>Services</h3>
                <ul className={styles.servicesLinks}>
                <li><Link href="/services/teamExtension">Team Extension</Link>
                    </li>
                <li><Link href="/services/teamExtension">Outsourcing</Link>
                    </li>
                <li><Link href="/services/custom-software-dev">Custom Software Development</Link>
                    </li>
                <li><Link href="/serverices/software-modernization">Software Modernization</Link>
                    </li>
                
                <li><Link href="/services/consulting">Consulting</Link>
                    </li>
            </ul>
            </div>
            <div className={styles.otherLinks}>
            <h3>Quick Links</h3>
                <ul>
                <li><Link href="#">About</Link>
                </li>
                <li><Link href="#">Our Tech Stack</Link>
                </li>
                </ul>
            </div>
            <Image className={styles.footerLogo} src={"/logo.svg"} width={300} height={300} alt="logo" />
            <div className={styles.social}>
                
                <h3>Let’s connect:</h3>
                <span>
                <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>
                </span>
                <span>
                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
                </span>
                <span>
                   
                </span>
                <span>
                <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_140_2)">
<path fillRule="evenodd" clipRule="evenodd" d="M256 0C397.385 0 512 114.615 512 256C512 397.385 397.385 512 256 512C114.615 512 0 397.385 0 256C0 114.615 114.615 0 256 0Z" fill="white"/>
<path d="M318.64 157.549H352.041L279.068 240.956L364.918 354.451H297.696L245.049 285.615L184.807 354.451H151.384L229.436 265.239L147.082 157.549H216.006L263.596 220.466L318.64 157.549ZM306.916 334.457H325.426L205.95 176.493H186.09L306.916 334.457Z" fill="#120642" fillOpacity="0.84"/>
</g>
<defs>
<clipPath id="clip0_140_2">
<rect width="512" height="512" fill="white"/>
</clipPath>
</defs>
</svg>

                </span>
            </div>
            </div>
            <div className={`${styles.copy} ${inter.className}`}>
                <hr className={styles.divider} />
                <p>© 2024 Octa. All rights reserved. Designed with precision and passion.</p>
            </div>
           
        
    </section>
  )
}

export default Footer;