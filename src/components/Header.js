import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import IconLink from "./IconLink";
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
        <IconLink path="https://github.com/claudiokazuo/" icon={faGithub} />

        <IconLink
          path="https://www.instagram.com/hira.clau/"
          icon={faInstagram}
        />
      </div>
    </header>
  );
}
