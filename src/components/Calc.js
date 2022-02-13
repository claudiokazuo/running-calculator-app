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
          padding: "5px",
          
        }}
      >
        <Button name="calc">Calcular</Button>
        <Link href="/">
          <Button name="goback">Voltar</Button>
        </Link>
      </FormGroup>
    </>
  );
}
