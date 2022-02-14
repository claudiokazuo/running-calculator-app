import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import { InputGroup } from "reactstrap";
import Group from "./Group";
export default function Distance({ handleInput }) {
  return (
    <>
      <Group title="Distância" icon={faMapLocation}>
        <InputGroup className="my-group">
          <Input
            handleInput={handleInput}
            name="distance"
            placeholder="km"
            mask="###"
          />
        </InputGroup>
      </Group>
    </>
  );
}
