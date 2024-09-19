import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [hamToggled, setHamToggled] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null); // Ref for the observed element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting); // Set scrolled to true when element leaves the viewport
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (observerRef.current) {
      observer.observe(observerRef.current); // Observe the element
    }

    // Clean up observer on component unmount
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, []);

  return (
    <>
      {/* This div will act as the observed element */}
      <div ref={observerRef} style={{ height: "0px", marginTop: "0px" }}></div>

      <div
        className={`${styles.navbarContainer} ${inter.className} ${
          hamToggled ? `${styles.navToggled}` : ""
        } ${scrolled ? `${styles.scrolled}` : ""}`}
      >
        <div className={styles.logo}>
          <Link href="/">
            <Image src="logo.svg" width={100} height={100} alt="logo" />
          </Link>
        </div>
        <nav className={styles.navbar}>
          <button
            onClick={() => setHamToggled(!hamToggled)}
            className={`${styles.hamBtn} ${hamToggled ? `${styles.isActive}` : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#services" className={styles.navLink}>
                Services
                <span className={styles.arrowDrop}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M480-360 280-560h400L480-360Z" />
                  </svg>
                </span>
              </Link>
              {/* Submenu */}
              <ul className={styles.servicesList}>
                <li>
                  <Link href="/services/teamExtension">Team Extension</Link>
                </li>
                <li>
                  <Link href="/services/teamExtension">Outsourcing</Link>
                </li>
                <li>
                  <Link href="/services/custom-software-dev">Custom Software Development</Link>
                </li>
                <li>
                  <Link href="/services/software-modernization">Software Modernization</Link>
                </li>
                
                <li>
                  <Link href="/services/consulting">Consulting</Link>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <Link href="#techs" className={styles.navLink}>Techs</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#about" className={styles.navLink}>About Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#portfolio" className={styles.navLink}>Portfolio</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" className={styles.navLink}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
