import Link from "next/link";
import { Button } from "reactstrap";

export default function Page404() {
  return (
    <>
      <h1>Ops...</h1>
      <h2>Você está tentando acessar página que não existe</h2>
      <Link href="/">
        <Button>Voltar</Button>
      </Link>
    </>
  );
}
