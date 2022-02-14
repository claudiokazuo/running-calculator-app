import { CardTitle, Form, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Box({ title, handleSubmit, children, icon }) {
  return (
    <>
      <Row style={{ textAlign: "center" }}>
        <CardTitle
          tag="h1"
          style={{
            color: "#061826",
            fontSize: "60px",
            textShadow: "2px 2px #028090",
            fontWeight: "bold",
            
          }}
        >
          <FontAwesomeIcon icon={icon} />
          {title}
        </CardTitle>
      </Row>
      <Form onSubmit={handleSubmit} style={{ margin: "15px" }}>
        {children}
      </Form>
    </>
  );
}
