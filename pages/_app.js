import "bootstrap/dist/css/bootstrap.css";
import "./_app.css";
import { useEffect } from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCoffee);

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Header/>
      <Component {...pageProps}></Component>
      <Footer />
    </>
  );
}
