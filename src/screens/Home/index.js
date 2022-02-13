import Link from "next/link";
import Head from "next/head";
import { Button, Container, Card, CardBody, Row, Badge, CardHeader, CardFooter } from "reactstrap";
export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadora de corrida</title>
      </Head>      
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
