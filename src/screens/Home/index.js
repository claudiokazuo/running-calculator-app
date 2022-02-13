import Link from "next/link";
import { Button, Container, Card, CardBody } from "reactstrap";
export default function Home() {
  return (
    <>
      <Container>
        <Card>
          <CardBody>
            <Link href="/pace">
              <Button>Pace</Button>
            </Link>
            <Link href="/time">
              <Button>Tempo</Button>
            </Link>
            <Link href="/distance">
              <Button>Distância</Button>
            </Link>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
