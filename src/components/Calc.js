import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faRotateBack } from "@fortawesome/free-solid-svg-icons";
import { FormGroup, Button, Tooltip } from "reactstrap";
import Link from "next/link";
import { useState } from "react";
export default function Calc({ message, goback }) {
  const [isOpenCalc, setIsOpenCalc] = useState(false);
  const [isOpenGoBack, setIsOpenGoBack] = useState(false);
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
        <Button
          id="calc"
          name="calc"
          onMouseOver={(e) => {
            setIsOpenCalc(true);
          }}
        >
          <FontAwesomeIcon icon={faCalculator} />
        </Button>

        <Link href="/">
          <Button
            name="goback"
            id="goback"
            onMouseOver={() => setIsOpenGoBack(true)}
          >
            <FontAwesomeIcon icon={faRotateBack} />
          </Button>
        </Link>
        <Tooltip
          id={1}
          isOpen={isOpenCalc}
          placement="top"
          target="calc"
          toggle={() => {
            setIsOpenCalc(false);
          }}
        >
          {message}
        </Tooltip>
        <Tooltip
          id={2}
          isOpen={isOpenGoBack}
          placement="top"
          target="goback"
          toggle={() => {
            setIsOpenGoBack(false);
          }}
        >
          {goback}
        </Tooltip>
      </FormGroup>
    </>
  );
}
