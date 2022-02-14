import { Modal, ModalBody, ModalHeader } from "reactstrap";
export default function MyModal({ open, header, message, handleToogle }) {
  return (
    <>
      <Modal isOpen={open} toggle={handleToogle}   centered>
        <ModalHeader
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"#57C4E5", 
            color: "white"           
            
          }}
        >
          {header}
        </ModalHeader>
        <ModalBody 
          style={{
            textAlign: "center",
            backgroundColor: "#57C4E5",
            color:"white"
          }}
        >
          {message}
        </ModalBody>
      </Modal>
    </>
  );
}
