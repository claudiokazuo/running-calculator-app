import Head from "../../components/Head";
import Modal from "../../components/Modal";
import { CalculateTime } from "../../api/mock";
import { Container } from "reactstrap";
import { useState } from "react";
import inputHandler from "../../utils/InputHandler";
import zeroPadHandler from "../../utils/ZeroPadHandler";
import Pace from "../../components/Pace";
import Calc from "../../components/Calc";
import Distance from "../../components/Distance";
import Box from "../../components/Box";
import { faClock} from "@fortawesome/free-solid-svg-icons";
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
    let data = {};
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

    if (validated) {
      const time = CalculateTime(data);
      setModal({
        open: true,
        header: "Tempo Total",
        message: `${zeroPadHandler(time.hours, 2)}:${zeroPadHandler(
          time.minutes,
          2
        )}:${zeroPadHandler(time.seconds, 2)}`,
        validated: true,
      });
    }
  };

  return (
    <>
      <Head>
        Tempo
      </Head>
      <Container>
        <Modal
          open={modal.open}
          handleToogle={handleToogle}
          header={modal.header}
          message={modal.message}
          icon={faClock}
        />
        <Box title="Tempo" handleSubmit={handleSubmit} icon={faClock}>
          <Distance handleInput={handleInput} />
          <Pace handleInput={handleInput} />
          <Calc message={"Calcular o tempo"} goback={"Voltar"} />
        </Box>
      </Container>
    </>
  );
}
