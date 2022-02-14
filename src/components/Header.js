import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
export default function Header() {
  return (
    <header style={{ position: "fixed", top: "0", width: "100%" }}>
      <div
        className="text-center p-3"
        style={{
          backgroundColor: "#000000",
          color: "#F3F3F3",
          fontSize: "32px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <Link href="https://github.com/claudiokazuo/">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.instagram.com/hira.clau/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
    </header>
  );
}
