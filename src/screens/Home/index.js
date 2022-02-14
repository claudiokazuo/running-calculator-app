import Link from "next/link";
import {
  Button,
  Container,
  Card,
  CardBody,
  Row,
  Badge,
  CardHeader,
  CardFooter,
} from "reactstrap";
import Head from "../../components/Head";
export default function Home() {
  return (
    <>
      <Head>Calculadora de corrida</Head>
      <Container style={{ width: "200px" }}>
        <Row>
          <Link href="/pace">
            <Button>Pace</Button>
          </Link>
          <Link href="/time">
            <Button>Tempo</Button>
          </Link>
          <Link href="/distance">
            <Button>Distância</Button>
          </Link>
        </Row>        
      </Container>      
    
    </>
  );
}
