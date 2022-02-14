import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faRotateBack } from "@fortawesome/free-solid-svg-icons";
import { FormGroup, Button } from "reactstrap";
import Link from "next/link";
export default function Calc() {
  return (
    <>
      <FormGroup
        style={{
          margin: "1px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          
        }}
      >
        <Button name="calc">
        <FontAwesomeIcon icon={faCalculator} />
          </Button>
        <Link href="/">
          <Button name="goback">
          <FontAwesomeIcon icon={faRotateBack} />
            </Button>
        </Link>
      </FormGroup>
    </>
  );
}
