import { FormGroup, Input, InputGroup, Label, Col } from "reactstrap";
export default function Pace({ handleInput }) {
  return (
    <>
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
            sm={3}
            style={{
              padding: "3px",
            }}
          >
            <Input
              className="pace"
              name="minutes"
              placeholder="minutos"
              type="number"
              onChange={handleInput}
              min={0}
            />
          </Col>
          <Col
            sm={3}
            style={{
              padding: "3px",
            }}
          >
            <Input
              className="pace"
              name="seconds"
              placeholder="segundos"
              type="number"
              onChange={handleInput}
              min={0}
              max={59}
            />
          </Col>
          <Col
            sm={3}
            style={{
              padding: "3px",
            }}
          >
            <Input
              className="pace"
              name="milliseconds"
              placeholder="millisegundos"
              type="number"
              onChange={handleInput}
              min={0}
              max={999}
            />
          </Col>
        </InputGroup>
      </FormGroup>
    </>
  );
}
