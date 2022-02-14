import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function IconLink({ path, icon }) {
  return (
    <>
      <Link href={path}>
        <FontAwesomeIcon icon={icon} />
      </Link>
    </>
  );
}
