import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import Link from "next/link";
export default function ButtonLink({ icon, path, children }) {
  return (
    <>
      <Link href={path}>
        <Button>
          <FontAwesomeIcon icon={icon} />
          {children}
        </Button>
      </Link>
    </>
  );
}
