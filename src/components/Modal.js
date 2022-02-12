import { Modal, ModalBody, ModalHeader } from "reactstrap";
export default function MyModal({ open, header, message, handleToogle }) {
  return (
    <>
      <Modal isOpen={open} toggle={handleToogle} centered>
        <ModalHeader
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {header}
        </ModalHeader>
        <ModalBody
          style={{
            textAlign: "center",
          }}
        >
          {message}
        </ModalBody>
      </Modal>
    </>
  );
}
