import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Input } from "../../components/input/index.";
import storage from "../../firebase";

export const ProductsForm = ({ defaultValues, onComplete }) => {
  const [name, setName] = useState(defaultValues ? defaultValues.name : "");
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);

  const [image, setImage] = useState("");
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
  }, [defaultValues, setName, setDescription]);

  const handleUpload = (file) => {
    const fileName = new Date().getTime() + "product" + file.name;
    const uploadTask = storage.ref(`/items/${fileName}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setImage(url);
          alert(url);
          alert("Uploaded");
        });
      }
    );
  };

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      if (defaultValues) {
        await axios.put(
          "http://localhost:8800/api/products/" + defaultValues._id,
          { name, description, image, price }
        );
      } else {
        await axios.post("http://localhost:8800/api/products", {
          name,
          description,
          image,
          price,
        });
      }
      setLoading(false);
      onComplete();
    },
    [defaultValues, onComplete, name, description, setLoading, image, price]
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
      <Input
        type="text"
        defaultValue={price}
        onChange={(e) => setPrice(e.target.value)}
        mt="16px"
        key="price"
        placeholder="Price"
        required
      />
      {defaultValues && defaultValues.image ? (
        <img src={image} width={100} />
      ) : null}
      <Input
        type="file"
        onChange={(e) => handleUpload(e.target.files[0])}
        mt="16px"
        key="Image"
        placeholder="Image"
      />
      <Button mt="16px" type="submit" disabled={loading}>
        {loading
          ? "Please wait..."
          : defaultValues
          ? "Edit product"
          : "Create product"}
      </Button>
    </Form>
  );
};
