import NumberFormat from "react-number-format";
import { FormGroup, InputGroup, Label, Col } from "reactstrap";
export default function Pace({ handleInput }) {
  return (
    <>
      <FormGroup
        style={{
          textAlign: "center",
        }}
      >
        <Label tag="h4" style={{color:"#85C7F2",fontWeight: "bold", textShadow: "2px 2px #028090"}}>Pace</Label>
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
              className="pace form-control input-number"
              name="minutes"
              placeholder="minutos"
              type="text"
              onChange={handleInput}
              min={0}                            
              type="text"            
              displayType="input"
              suffix="'"           
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
              className="pace form-control input-number"
              name="seconds"
              placeholder="segundos"
              type="text"
              onChange={handleInput}
              min={0}
              max={59}               
              displayType="input"
              suffix="''"           
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
              className="pace form-control input-number"
              name="milliseconds"
              placeholder="millisegundos"
              type="text"
              onChange={handleInput}
              min={0}
              max={999}              
              displayType="input"
              suffix="'''"           
              mask="###"  
            />
          </Col>
        </InputGroup>
      </FormGroup>
    </>
  );
}
