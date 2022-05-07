import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { Grid } from "../../components/grid";
import { Table } from "../../components/table";
import "../DeliverManagement/DeliveryOrderList/deliveryOrderList.scss";
import { ProductsForm } from "./products-form";

const getProducts = async () => {
  return await axios.get("http://localhost:8800/api/products");
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(undefined);

  const fetchProducts = useCallback(async () => {
    const { data } = await getProducts();
    setProducts(data);
  }, [setProducts]);

  const onDelete = useCallback(
    async (id) => {
      await axios.delete(`http://localhost:8800/api/products/${id}`);
      fetchProducts();
    },
    [fetchProducts]
  );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="dordersContainer">
      <Grid p="16px" gridAutoFlow="column" alignItems="center">
        <h1 style={{ margin: 0, color: "#0f0066" }} className="dRMTitle">
          Products
        </h1>
        <Button mt="16px" onClick={() => setProduct(undefined)} ml="24px">
          Add product
        </Button>
      </Grid>

      <Grid p="16px" mt="16px" gridAutoFlow="column">
        <div>
          <table>
            <Table.Header>
              <Table.TR>
                <Table.TH></Table.TH>
                <Table.TH>Name</Table.TH>
                <Table.TH>Description</Table.TH>
                <Table.TH>Price</Table.TH>
              </Table.TR>
            </Table.Header>
            <Table.Body>
              {products &&
                products.map((product) => (
                  <Table.TR key={product._id}>
                    <Table.TD>
                      <img width={50} src={product.image} />
                    </Table.TD>
                    <Table.TD>{product.name}</Table.TD>
                    <Table.TD>{product.description}</Table.TD>
                    <Table.TD>Rs.{product.price}</Table.TD>
                    <Table.TD>
                      <Button onClick={() => setProduct({ ...product })}>
                        Edit
                      </Button>
                    </Table.TD>
                    <Table.TD>
                      <Button onClick={() => onDelete(product._id)} bg="red">
                        Delete
                      </Button>
                    </Table.TD>
                  </Table.TR>
                ))}
            </Table.Body>
          </table>
        </div>
        <ProductsForm defaultValues={product} onComplete={fetchProducts} />
      </Grid>
    </div>
  );
}
