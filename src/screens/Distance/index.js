import Modal from "../../components/Modal";
import { CalculateDistance } from "../../api/mock";
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
import Time from "../../components/Time";
import Pace from "../../components/Pace";
import Calc from "../../components/Calc";

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
    let time = {};
    let pace = {};
    let validated = true;

    for (let i = 0; i < e.target.length; i++) {
      console.log("class");
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
          if (e.target[i].classList[0] === "time") {
            time = { ...time, [e.target[i].name]: parseInt(e.target[i].value) };
          } else {
            pace = { ...pace, [e.target[i].name]: parseInt(e.target[i].value) };
          }
        }
      }
    }

    if (validated) {
      const { distance } = CalculateDistance({ pace, time });
      setModal({
        open: true,
        header: "Distância",
        message: `${distance} km`,
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
                Distância Estimada
              </CardTitle>
            </Row>

            <Form onSubmit={handleSubmit} style={{ margin: "15px" }}>
              <Time handleInput={handleInput} />
              <Pace handleInput={handleInput} />
              <Calc />
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
