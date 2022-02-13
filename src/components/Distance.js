import NumberFormat from "react-number-format";
import { FormGroup, Input, InputGroup, Label, Col } from "reactstrap";
export default function Distance({ handleInput }) {
  
  return (
    <>
      <FormGroup
        style={{
          textAlign: "center",
        }}
      >
        <Label tag="h4" style={{color:"#85C7F2",fontWeight: "bold", textShadow: "2px 2px #028090"}}>Distância</Label>
        <InputGroup
          style={{
            margin: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col sm={3}>          
            <NumberFormat 
            name="distance"
            onChange={handleInput}
            className="form-control input-number"
            placeholder="km"             
            decimalSeparator=","
            type="text"            
            displayType="input"
            suffix=" km"           
            mask="##,###"         
            />
            
          </Col>
        </InputGroup>
      </FormGroup>
    </>
  );
}
