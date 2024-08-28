import LoadingComponent from "@/components/loadingComponent/LoadingComponent";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  if (loading) {
    return <LoadingComponent />;
  }
  return <Component {...pageProps} />;
}
