import { faClock } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { InputGroup } from "reactstrap";
import Group from "./Group";
export default function Time({ handleInput }) {
  return (
    <>
      <Group title="Tempo" icon={faClock}>
        <InputGroup className="my-group">
          <Input
            handleInput={handleInput}
            name="hours"
            placeholder="horas"
            mask="##"
          />
          <Input
            handleInput={handleInput}
            name="minutes"
            placeholder="minutos"
            mask="##"
          />
          <Input
            handleInput={handleInput}
            name="seconds"
            placeholder="segundos"
            mask="##"
          />
        </InputGroup>
      </Group>
    </>
  );
}
