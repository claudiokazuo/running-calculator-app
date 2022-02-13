import Modal from "../../components/Modal";
import { CalculateTime } from "../../api/mock";
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
import Pace from "../../components/Pace";
import Calc from "../../components/Calc";
import Distance from "../../components/Distance";

export default function Main() {
  const [modal, setModal] = useState({ open: false, header: "", message: "" });

  const handleToogle = (e) => {
    setModal({ ...modal, open: false });
  };

  const handleInput = (e) => {
    if (!inputHandler[e.target.name](e.target.value)) {
      setModal({
        open: true,
        header: "Ops..",
        message: `O campo ${e.target.placeholder} não foi preenchido corretamente`,
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
      const time = CalculateTime(data);
      setModal({
        open: true,
        header: "Tempo Total",
        message: `${zeroPadHandler(time.hours, 2)}:${zeroPadHandler(
          time.minutes,
          2
        )}:${zeroPadHandler(time.seconds, 2)}`,
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
                Tempo Total Estimado
              </CardTitle>
            </Row>

            <Form onSubmit={handleSubmit} style={{ margin: "15px" }}>
              <Distance handleInput={handleInput} />
              <Pace handleInput={handleInput} />
              <Calc />
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
