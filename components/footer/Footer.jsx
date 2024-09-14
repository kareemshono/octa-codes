import Image from "next/image"
import styles from "./Footer.module.scss"
import Link from "next/link";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
        {/* <div className={styles.logoContainer}>
            <Image src={"/minilogo.svg"} width={50} height={50} />
            <p>OCTA</p>
        </div> */}
        <div className={styles.container}>
            <div className={styles.quickLinks}>
                <h3>Services</h3>
                <ul className={styles.servicesLinks}>
                <li><Link href="#">Team Extension</Link>
                    </li>
                <li><Link href="#">Outsourcing</Link>
                    </li>
                <li><Link href="#">Custom Software Development</Link>
                    </li>
                <li><Link href="#">Software Modernization</Link>
                    </li>
                <li><Link href="#">Software Scaling</Link>
                    </li>
                <li><Link href="#">Consulting</Link>
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
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#1206424b" stroke="#1206424b" strokeWidth="0.704"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fillRule="evenodd"> <path d="m0 0h32v32h-32z"></path> <path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#ffffff" fillRule="nonzero"></path> </g> </g></svg>
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
            <div className={styles.copy}>
                <hr className={styles.divider} />
                <p>© 2024 Octa. All rights reserved. Designed with precision and passion.</p>
            </div>
           
        
    </section>
  )
}

export default Footer;