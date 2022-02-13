import { FormGroup, Input, InputGroup, Label, Col } from "reactstrap";
export default function Distance({handleInput}) {
  return (
    <>
      {" "}
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
          <Col sm={3}>
            <Input
              name="distance"
              type="number"
              placeholder="km"
              onChange={handleInput}
              min={1}
            />
          </Col>
        </InputGroup>
      </FormGroup>
    </>
  );
}
