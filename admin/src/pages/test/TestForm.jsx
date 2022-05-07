import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Input } from "../../components/input/index.";

export default function TestForm() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
      setName("");
      setDescription("");
    },
     [setName, setDescription]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
        await axios.post("http://localhost:8800/api/testing", {
          name,
          description,
        });
      },
    [  name, description,]
  );

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        value={"jnjn"}
        disabled
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <Button mt="16px" type="submit">
      </Button>
    </Form>
  );
};
