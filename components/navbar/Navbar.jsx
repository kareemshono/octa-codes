import Image from "next/image"
import styles from "./Navbar.module.scss"
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({subsets:["latin"]})
const Navbar = () => {
    const [hamToggled,setHamToggled] = useState(false);
    const [subListToggled,setSubListToggled] = useState(false)

  return (
    <div className={`${styles.navbarContainer} ${inter.className} ${hamToggled ? `${styles.navToggled}`:""}`}>
        <div className={styles.logo}>
        <Link href="/">
        <Image src={"logo.svg"} width={100} height={100} alt="logo" />
        </Link>
        </div>
        <nav className={styles.navbar}>
        <button onClick={() => setHamToggled(!hamToggled)} className= {`${styles.hamBtn} ${hamToggled ? `${styles.isActive}`:''}`}>
             <span></span>
               <span></span>
                 <span></span>
           </button>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>Services 
                    <span  onClick={() => setSubListToggled(!subListToggled)} className={styles.arrowDrop}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-360 280-560h400L480-360Z"/></svg></span>
                    </Link>
                    <ul className={`${styles.servicesList} ${subListToggled ? `${styles.subToggled}`:""}`}>
                        <li>
                        <Link href="/">Team Extension</Link></li>
                        <li>
                        <Link href="/">Outsourcing</Link>
                        </li>
                        
                        <li>
                        <Link href="/">Custom Software Development</Link>
                        
                        </li>
                        <li>
                        <Link href="/">Software Modernization</Link>
                        </li>
                        <li>
                        <Link href="/">Software Scaling</Link>
                        </li>
                        <li>
                            <Link href="/" >Consulting</Link>
                        </li>
                    </ul>
                  
                </li>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>Techs</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>About Us</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>Portfolio</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/" className={styles.navLink}>Contact</Link>
                </li>
            </ul>
            
        </nav>
    </div>
  )
}

export default Navbar;