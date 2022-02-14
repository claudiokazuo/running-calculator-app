import Head from "../../components/Head";
import Modal from "../../components/Modal";
import { CalculatePace } from "../../api/mock";
import { Container } from "reactstrap";
import { useState } from "react";
import inputHandler from "../../utils/InputHandler";
import zeroPadHandler from "../../utils/ZeroPadHandler";
import Distance from "../../components/Distance";
import Time from "../../components/Time";
import Calc from "../../components/Calc";
import Box from "../../components/Box";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  const [modal, setModal] = useState({ open: false, header: "", message: "" });
  const handleToogle = (e) => {
    setModal({ ...modal, open: false });
  };

  const handleInput = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    const placeholder = e.target.placeholder;

    const result = inputHandler[name](value);

    if (!result) {
      setModal({
        open: true,
        header: "Ops..",
        message: `O campo ${placeholder} não foi preenchido corretamente`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    let validated = true;

    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].type === "text") {
        console.log(e.target[i].name);
        console.log(parseFloat(e.target[i].value));
        if (!inputHandler[e.target[i].name](e.target[i].value)) {
          setModal({
            open: true,
            header: "Ops...",
            message: `O campo ${e.target[i].placeholder} não foi preenchido corretamente`,
          });
          validated = false;
          break;
        } else {
          data = {
            ...data,
            [e.target[i].name]:
              e.target[i].name === "distance"
                ? parseFloat(e.target[i].value.replace(",", "."))
                : parseInt(e.target[i].value),
          };
        }
      }
    }
    console.log(data);

    if (validated) {
      const pace = CalculatePace(data);
      setModal({
        open: true,
        header: "Pace",
        message: `${zeroPadHandler(pace.minutes, 2)}'${zeroPadHandler(
          pace.seconds,
          2
        )}''${pace.milliseconds}'''`,
        validated: true,
      });
    }
  };

  return (
    <>
      <Head>Pace</Head>
      <Container>
        <Modal
          open={modal.open}
          handleToogle={handleToogle}
          header={modal.header}
          message={modal.message}
          icon={faPersonRunning}
        />
        <Box handleSubmit={handleSubmit} title="Pace" icon={faPersonRunning}>
          <Distance handleInput={handleInput} />
          <Time handleInput={handleInput} />
          <Calc message={"Calcular o pace"} goback={"voltar"} />
        </Box>
      </Container>
    </>
  );
}
