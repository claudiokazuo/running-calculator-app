import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function IconLink({ href, icon }) {
  return (
    <>
      <Link href={href} passHref>
        <a>
        <FontAwesomeIcon icon={icon} />
        </a>
      </Link>
    </>
  );
}
