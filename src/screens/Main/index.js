import Modal from "../../components/Modal";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  Label,
  Col,
  Row,
} from "reactstrap";
import { useState } from "react";
export default function Main() {
  const [modal, setModal] = useState({ open: false, header: "", message: "" });
  const handleToogle = (e) => {
    setModal({ ...modal, open: false });
  };

  const handleTime = (value) => {
    const target = parseInt(value);
    if (target < 0 || target > 59) {
      return false;
    }
    return true;
  };

  const handleDistance = (value) => {
    const target = parseInt(value);
    if (target < 0) {
      return false;
    }
    return true;
  };

  const inputHandler = {
    minutes: handleTime,
    seconds: handleTime,
    distance: handleDistance,
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

  const zeroPad = (num, places) => String(num).padStart(places, "0");

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {};
    let validated = true;
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].type === "number") {
        if (
          e.target[i].value === "" &&
          !inputHandler[e.target[i].name](e.target[i].value)
        ) {
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

    console.log("validated", validated);
    if (validated) {
      let totalRunTimeInSeconds =
        (data.minutes * 60 + data.seconds) * data.distance;
      let hours = totalRunTimeInSeconds / 3600;
      let minutes = (hours - parseInt(hours)) * 60;
      let seconds = (minutes - parseInt(minutes)) * 60;
      let finalHours = parseInt(hours);
      let finalMinutes = parseInt(minutes);
      let finalSeconds = parseInt(seconds.toFixed(2));

      setModal({
        open: true,
        header: "Tempo Total",
        message: `${zeroPad(finalHours, 2)}:${zeroPad(
          finalMinutes,
          2
        )}:${zeroPad(finalSeconds, 2)}`,
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
        <Card style={{ width: "300px" }}>
          <CardBody>
            <Row style={{ textAlign: "justify" }}>
              <CardTitle tag="strong">
                Calcule o tempo total de acordo com o ritmo médio (pace) por
                quilômetro
              </CardTitle>
            </Row>

            <Form onSubmit={handleSubmit} style={{ margin: "15px" }}>
              <FormGroup
                style={{
                  textAlign: "center",
                }}
              >
                <Label tag="strong">Distância</Label>
                <InputGroup
                  style={{
                    margin: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Col sm={4}>
                    <Input
                      name="distance"
                      placeholder="km"
                      type="number"
                      onChange={handleInput}
                      min={1}
                    />
                  </Col>
                </InputGroup>
              </FormGroup>
              <FormGroup style={{ textAlign: "center" }}>
                <Label tag="strong">Pace</Label>
                <InputGroup
                  style={{
                    margin: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Col
                    sm={4}
                    style={{
                      padding: "3px",
                    }}
                  >
                    <Input
                      name="minutes"
                      placeholder="min"
                      type="number"
                      onChange={handleInput}
                      min={0}
                      max={59}
                    />
                  </Col>
                  <Col
                    sm={4}
                    style={{
                      padding: "3px",
                    }}
                  >
                    <Input
                      name="seconds"
                      placeholder="seg"
                      type="number"
                      onChange={handleInput}
                      min={0}
                      max={59}
                    />
                  </Col>
                </InputGroup>
              </FormGroup>
              <FormGroup
                style={{
                  margin: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button name="calculate">Calcular</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
