import styled from "styled-components";
import { Button } from "../button";
import { Grid } from "../grid";
import { Text } from "../text";

const SWrapper = styled.div`
  padding: 8px;
  border: 1px solid green;
  border-radius: 8px;
  width: 200px;
  position: relative;
  display: grid;
  justify-content: center;
  cursor: pointer;
`;

const SOffer = styled.div`
  background-color: green;
  padding: 8px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8125rem;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
`;

export const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <SWrapper>
      <SOffer>10% OFF</SOffer>
      <img width="200px" src={product.image} />
      <div>
        <Text.Body mt="8px" fontWeight="bold">
          {product.name}
        </Text.Body>
        <Grid
          gridAutoFlow="column"
          justifyContent="space-between"
          alignItems="center"
          mt="8px"
        >
          <div>
            <Text.Body color="gray" style={{ textDecoration: "line-through" }}>
              Rs.{product.price}
            </Text.Body>
            <Text.Body fontWeight="bold">Rs.{product.price}</Text.Body>
          </div>
          <Button>Add to cart</Button>
        </Grid>
      </div>
    </SWrapper>
  );
};
