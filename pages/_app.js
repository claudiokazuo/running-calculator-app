import "bootstrap/dist/css/bootstrap.css";
import "./_app.css";
import { useEffect } from "react";
import { CardFooter } from "reactstrap";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Component {...pageProps}></Component>
    </>
          
  );
}
