import NumberFormat from "react-number-format";
import { Col } from "reactstrap";
export default function Input({ name, placeholder, mask, handleInput, suffix }) {
  return (
    <>
      <Col sm={4} style={{ width: "130px", margin: "5px" }}>
        <NumberFormat
          className="pace form-control input-number"
          name={name}
          placeholder={placeholder}
          type="text"
          onChange={handleInput}
          min={0}
          type="text"
          displayType="input"
          suffix={suffix}
          mask={mask}
        />
      </Col>
    </>
  );
}
