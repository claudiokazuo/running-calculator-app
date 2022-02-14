import {
  faClock,
  faMapLocation,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Row } from "reactstrap";
import Head from "../../components/Head";
import ButtonLink from "../../components/ButtonLink";
export default function Home() {
  return (
    <>
      <Head>Calculadora de corrida</Head>
      <Container style={{ width: "150px" }}>
        <Row>
          <ButtonLink href="/pace" icon={faPersonRunning}>
            Pace
          </ButtonLink>
          <ButtonLink href="/time" icon={faClock}>
            Tempo
          </ButtonLink>
          <ButtonLink href="/distance" icon={faMapLocation}>
            Distância
          </ButtonLink>
        </Row>
      </Container>
    </>
  );
}
