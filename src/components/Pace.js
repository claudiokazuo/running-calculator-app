import {faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { InputGroup } from "reactstrap";
import Group from "./Group";
export default function Pace({ handleInput }) {
  return (
    <>
      <Group title="Pace" icon ={faPersonRunning}>
        <InputGroup className="my-group">
          <Input
            handleInput={handleInput}
            name="minutes"
            placeholder="minutos"
            mask="##"
            suffix="'"
          />
          <Input
            handleInput={handleInput}
            name="seconds"
            placeholder="segundos"
            mask="##"
            suffix="''"
          />
          <Input
            handleInput={handleInput}
            name="milliseconds"
            placeholder="millisegundos"
            mask="###"
            suffix="'''"
          />
        </InputGroup>
      </Group>
    </>
  );
}
