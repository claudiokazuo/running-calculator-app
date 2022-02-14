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
      <footer style={{width: "100%", marginTop: "auto", marginBottom: "auto"}}>
        <div className="text-center p-3" style= {{ backgroundColor : "black"}}>        
       &copy; {new Date().getFullYear()} Claudio Hirakawa
        </div>
        </footer>  
    </>
          
  );
}
