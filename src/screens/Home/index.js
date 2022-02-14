import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapLocation, faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button, Container, Row } from "reactstrap";
import Head from "../../components/Head";
export default function Home() {
  return (
    <>
      <Head>Calculadora de corrida</Head>
      <Container style={{ width: "150px" }}>
        <Row>
          <Link href="/pace">            
            <Button>
            <FontAwesomeIcon icon={faPersonRunning} />
              Pace</Button>
              
          </Link>
          <Link href="/time">
            <Button>
              <FontAwesomeIcon icon={faClock} />
              Tempo
            </Button>
          </Link>
          <Link href="/distance">
            <Button>
              <FontAwesomeIcon icon={faMapLocation} />
              Distância
            </Button>
          </Link>
        </Row>
      </Container>
    </>
  );
}
