import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Input } from "../../components/input/index.";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const CategoriesForm = ({ defaultValues, onComplete }) => {
  const [name, setName] = useState(defaultValues ? defaultValues.name : "");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(
    defaultValues ? defaultValues.description : ""
  );

  useEffect(() => {
    if (defaultValues) {
      setName(defaultValues.name);
      setDescription(defaultValues.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [defaultValues]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      if (defaultValues) {
        await axios.put(
          "http://localhost:8800/api/categories/" + defaultValues._id,
          { name, description }
        );
      } else {
        await axios.post("http://localhost:8800/api/categories", {
          name,
          description,
        });
      }
      setLoading(false);
      onComplete();
    },
    [defaultValues, onComplete, name, description, setLoading]
  );

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        key="name"
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <Input
        type="text"
        defaultValue={description}
        onChange={(e) => setDescription(e.target.value)}
        mt="16px"
        key="description"
        placeholder="Description"
        required
      />
      <Button mt="16px" type="submit" disabled={loading}>
        {loading
          ? "Please wait..."
          : defaultValues
          ? "Edit category"
          : "Create Category"}
      </Button>
    </Form>
  );
};
