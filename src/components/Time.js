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
            suffix=" h"
          />
          <Input
            handleInput={handleInput}
            name="minutes"
            placeholder="minutos"
            mask="##"
            suffix=" m"
          />
          <Input
            handleInput={handleInput}
            name="seconds"
            placeholder="segundos"
            mask="##"
            suffix=" s"
          />
        </InputGroup>
      </Group>
    </>
  );
}
