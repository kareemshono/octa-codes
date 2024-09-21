import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import LoadingComponent from "@/components/loadingComponent/LoadingComponent";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  if (loading) {
    return <LoadingComponent />;
  }
  return <>
  <Navbar />
  <Component {...pageProps} />
  <Contact />
  <Footer />
  </>
  
  
}
