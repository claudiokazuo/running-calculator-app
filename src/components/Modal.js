import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
export default function MyModal() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>Modal body text goes here.</ModalBody>
      </Modal>
    </>
  );
}
