import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import Link from "next/link";
export default function ButtonLink({ icon, href, children }) {
  return (
    <>
      <Link href={href} passHref>        
        <Button>
          <FontAwesomeIcon icon={icon} />
          {children}
        </Button>        
      </Link>
    </>
  );
}
