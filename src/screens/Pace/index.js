import Modal from "../../components/Modal";
import { CalculatePace } from "../../api/mock";
import {  
  Card,
  CardBody,
  CardTitle,
  Container,
  Form,
  Row,
} from "reactstrap";
import { useState } from "react";
import inputHandler from "../../utils/InputHandler";
import zeroPadHandler from "../../utils/ZeroPadHandler";
import Distance from "../../components/Distance";
import Time from "../../components/Time";
import Calc from "../../components/Calc";

export default function Main() {
  const [modal, setModal] = useState({ open: false, header: "", message: "" });
  const handleToogle = (e) => {
    setModal({ ...modal, open: false });
  };

  const handleInput = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    const placeholder = e.target.placeholder;

    const result = inputHandler[name](value);

    if (!result) {
      setModal({
        open: true,
        header: "Ops..",
        message: `O campo ${placeholder} não foi preenchido corretamente`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    let validated = true;

    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].type === "number") {
        if (!inputHandler[e.target[i].name](e.target[i].value)) {
          setModal({
            open: true,
            header: "Ops...",
            message: `O campo ${e.target[i].placeholder} não foi preenchido corretamente`,
          });
          validated = false;
          break;
        } else {
          data = { ...data, [e.target[i].name]: parseInt(e.target[i].value) };
        }
      }
    }

    if (validated) {
      const pace = CalculatePace(data);
      setModal({
        open: true,
        header: "Pace",
        message: `${zeroPadHandler(pace.minutes, 2)}'${zeroPadHandler(
          pace.seconds,
          2
        )}''${zeroPadHandler(pace.milliseconds, 2)}'''`,
        validated: true,
      });
    }
  };

  return (
    <>
      <Container>
        <Modal
          open={modal.open}
          handleToogle={handleToogle}
          header={modal.header}
          message={modal.message}
        />
        <Card>
          <CardBody>
            <Row style={{ textAlign: "center" }}>
              <CardTitle tag="h3" style={{ fontStyle: "italic" }}>
                Pace Estimado
              </CardTitle>
            </Row>

            <Form onSubmit={handleSubmit} style={{ margin: "15px" }}>
              <Distance handleInput={handleInput} />
              <Time handleInput={handleInput} />
              <Calc />
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
