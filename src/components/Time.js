import { FormGroup, Input, InputGroup, Label, Col } from "reactstrap";
import NumberFormat from "react-number-format";
export default function Time({ handleInput }) {
  return (
    <>
      <FormGroup
        style={{
          textAlign: "center",
        }}
      >
        <Label tag="h4" style={{color:"#85C7F2",fontWeight: "bold", textShadow: "2px 2px #028090"}}>Tempo</Label>
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
            <NumberFormat
              className="time form-control input-number"
              name="hours"
              placeholder="horas"
              type="text"
              onChange={handleInput}
              min={0}
              type="text"            
              displayType="input"
              suffix=" h"           
              mask="##"
            />
          </Col>
          <Col
            sm={3}
            style={{
              padding: "3px",
            }}
          >
            <NumberFormat            
              className="time form-control input-number"
              name="minutes"
              placeholder="minutos"
              type="text"
              onChange={handleInput}
              min={0}
              max={59}
              type="text"            
              displayType="input"
              suffix=" m"           
              mask="##"
            />
          </Col>
          <Col
            sm={3}
            style={{
              padding: "3px",
            }}
          >
            <NumberFormat
              className="time form-control input-number"
              name="seconds"
              placeholder="segundos"
              type="text"
              onChange={handleInput}
              min={0}
              max={59}              
              type="text"            
              displayType="input"
              suffix=" s"           
              mask="##"               
            />
          </Col>
        </InputGroup>
      </FormGroup>
    </>
  );
}
