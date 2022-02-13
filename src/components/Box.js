import { Card, CardBody, CardTitle,Form, Row } from "reactstrap";
export default function Box({ title, handleSubmit, children }) {
  return (
    <>
          <Row style={{ textAlign: "center" }}>
          {/* <Label tag="h4" style={{color:"#85C7F2",fontWeight: "bold", textShadow: "2px 2px #028090"}}> */}
            <CardTitle tag="h1" style={{color:"#061826",  textShadow: "2px 2px #028090", fontWeight: "bold", fontSize: "80px"}}>
              {title}
            </CardTitle>
          </Row>
          <Form onSubmit={handleSubmit} style={{ margin: "15px" }}>{children}</Form>
    </>
  );
}
