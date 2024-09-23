import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useRouter } from "next/router"; // Import useRouter

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const router = useRouter(); // Get router instance
  const [hamToggled, setHamToggled] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, []);

  // Function to handle scroll to specific section
  const scrollToSection = (hash) => {
    router.push("/").then(() => {
      // Scroll to the section after navigating to the home page
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Adding a delay to ensure the page has navigated to the home first
    });
  };

  // Determine if the current path includes "/services"
  const isOnServicesPage = router.pathname.includes("/services");

  return (
    <>
      <div ref={observerRef} style={{ height: "0px", marginTop: "0px" }}></div>

      <div
        className={`${styles.navbarContainer} ${inter.className} ${
          hamToggled ? `${styles.navToggled}` : ""
        } ${scrolled ? `${styles.scrolled}` : ""}`}
      >
        <div className={styles.logo}>
          <Link href="/">
            <Image src="logo.svg" width={75} height={75} alt="logo" />
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
              <Link className={styles.navLink} href="/">Home</Link>
            </li>
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
              {isOnServicesPage ? (
                <a
                  className={styles.navLink}
                  onClick={() => scrollToSection("#techs")}
                >
                  Techs
                </a>
              ) : (
                <Link href="#techs" className={styles.navLink}>
                  Techs
                </Link>
              )}
            </li>
            <li className={styles.navItem}>
              {isOnServicesPage ? (
                <a
                  className={styles.navLink}
                  onClick={() => scrollToSection("#about")}
                >
                  About Us
                </a>
              ) : (
                <Link href="#about" className={styles.navLink}>
                  About Us
                </Link>
              )}
            </li>
            <li className={styles.navItem}>
              {isOnServicesPage ? (
                <a
                  className={styles.navLink}
                  onClick={() => scrollToSection("#portfolio")}
                >
                  Portfolio
                </a>
              ) : (
                <Link href="#portfolio" className={styles.navLink}>
                  Portfolio
                </Link>
              )}
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
