import "../DeliverManagement/DeliveryOrderList/deliveryOrderList.scss";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "../../components/table";
import { Button } from "../../components/button";
import { Input } from "../../components/input/index.";
import { Form } from "../../components/form";
import { Grid } from "../../components/grid";
import { CategoriesForm } from "./categories-form";

const getCategories = async () => {
  return await axios.get("http://localhost:8800/api/categories");
};

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(undefined);

  const fetchCategories = useCallback(async () => {
    const { data } = await getCategories();
    setCategories(data);
  }, [setCategories]);

  const onDelete = useCallback(
    async (id) => {
      await axios.delete(`http://localhost:8800/api/categories/${id}`);
      fetchCategories();
    },
    [fetchCategories]
  );

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="dordersContainer">
      <Grid p="16px" alignItems="flex-start">
        <h1 style={{ margin: 0 }} className="dRMTitle">
          Categories
        </h1>
        <Button mt="16px" onClick={() => setCategory(undefined)} ml="24px">
          Add category
        </Button>
      </Grid>

      <Grid p="16px" mt="16px" gridAutoFlow="column">
        <div>
          <table>
            <Table.Header>
              <Table.TR>
                <Table.TH>Name</Table.TH>
                <Table.TH>Description</Table.TH>
              </Table.TR>
            </Table.Header>
            <Table.Body>
              {categories &&
                categories.map((category) => (
                  <Table.TR key={category._id}>
                    <Table.TD>{category.name}</Table.TD>
                    <Table.TD>{category.description}</Table.TD>
                    <Table.TD>
                      <Button onClick={() => setCategory({ ...category })}>
                        Edit
                      </Button>
                    </Table.TD>
                    <Table.TD>
                      <Button onClick={() => onDelete(category._id)} bg="red">
                        Delete
                      </Button>
                    </Table.TD>
                  </Table.TR>
                ))}
            </Table.Body>
          </table>
        </div>
        <CategoriesForm defaultValues={category} onComplete={fetchCategories} />
      </Grid>
    </div>
  );
}
