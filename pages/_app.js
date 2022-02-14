import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import GlobalStyle from "../src/themes/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />       
      <Component {...pageProps}></Component>
      <Footer />
    </>
  );
}
