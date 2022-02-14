import Head from "../../components/Head";
import Modal from "../../components/Modal";
import { CalculateDistance } from "../../api/mock";
import { Container } from "reactstrap";
import { useState } from "react";
import inputHandler from "../../utils/InputHandler";
import Time from "../../components/Time";
import Pace from "../../components/Pace";
import Calc from "../../components/Calc";
import Box from "../../components/Box";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  const [modal, setModal] = useState({ open: false, header: "", message: "" });
  const handleToogle = (e) => {
    setModal({ ...modal, open: false });
  };

  const handleInput = (e) => {
    if (!inputHandler[e.target.name](e.target.value)) {
      setModal({
        open: true,
        header: "Ops..",
        message: `O campo ${e.target.placeholder} não foi preenchido corretamente`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let time = {};
    let pace = {};
    let validated = true;

    for (let i = 0; i < e.target.length; i++) {      
      if (e.target[i].type === "text") {
        if (!inputHandler[e.target[i].name](e.target[i].value)) {
          setModal({
            open: true,
            header: "Ops...",
            message: `O campo ${e.target[i].placeholder} não foi preenchido corretamente`,
          });
          validated = false;
          break;
        } else {
          if (i < 3) {
            time = { ...time, [e.target[i].name]: parseInt(e.target[i].value) };
          } else {
            pace = { ...pace, [e.target[i].name]: parseInt(e.target[i].value) };
          }
        }
      }
    }
    if (validated) {
      const { distance } = CalculateDistance({ pace, time });
      setModal({
        open: true,
        header: "Distância",
        message: `${distance.toString().replace(".", ",")} km`,
        validated: true,
      });
    }
  };

  return (
    <>
      <Head>Distância</Head>
      <Container>
        <Modal
          open={modal.open}
          handleToogle={handleToogle}
          header={modal.header}
          message={modal.message}
          icon={faMapLocation}
        />
        <Box handleSubmit={handleSubmit} title="Distância" icon={faMapLocation}>
          <Time handleInput={handleInput} />
          <Pace handleInput={handleInput} />
          <Calc message={"Calcular a distância"} goback={"Voltar"} />
        </Box>
      </Container>
    </>
  );
}
