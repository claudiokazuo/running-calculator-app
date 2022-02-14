import { Form, Row } from "reactstrap";
export default function Box({ title, handleSubmit, children, icon }) {
  return (
    <>
      <Form onSubmit={handleSubmit} style={{ margin: "15px" }}>
        {children}
      </Form>
    </>
  );
}
