import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormGroup, Label } from "reactstrap";
export default function Group({ children, title, icon }) {
  return (
    <>
      <FormGroup
        style={{
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Label
          tag="h4"
          style={{
            color: "#85C7F2",
            fontWeight: "bold",
            textShadow: "2px 2px #028090",
          }}
        >
          <FontAwesomeIcon icon={icon} />
          {title}
        </Label>
        {children}
      </FormGroup>
    </>
  );
}
