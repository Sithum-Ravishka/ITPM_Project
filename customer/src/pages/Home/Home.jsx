import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Grid } from "../../components/grid";
import axios from "axios";
import { BiChevronRight } from "react-icons/bi";
import { Text } from "../../components/text";
import { ProductCard } from "../../components/product-card";

const SWrapper = styled.div`
  background-color: white;
  margin: 16px;
  margin-top: 0px;
  border-radius: 16px;
  height: 85vh;
  padding: 16px;
`;

const SImgAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid gray;
  margin-right: 8px;
`;

const getCategories = async () => {
  return await axios.get("http://localhost:8800/api/categories");
};
const getProducts = async () => {
  return await axios.get("http://localhost:8800/api/products");
};

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [rawProducts, setRawProducts] = useState([]);

  const fetchCategories = useCallback(async () => {
    const { data } = await getCategories();
    setCategories(data);
  }, [setCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const fetchProducts = useCallback(async () => {
    const { data } = await getProducts();
    setRawProducts(data);
  }, [setRawProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // TODO: Filter the promotional products
  const products = rawProducts;

  return (
    <SWrapper>
      <Text.Heading fontWeight="bold">Shop by categories</Text.Heading>
      <Grid
        gridAutoFlow="column"
        justifyContent="start"
        gridGap="16px"
        mt="16px"
      >
        {categories.map((category) => (
          <Grid
            key={category._id}
            width="300px"
            gridAutoFlow="column"
            justifyContent="space-between"
            alignItems="center"
            border="1px solid #a0ddad"
            borderBottomLeftRadius="16px"
            borderTopRightRadius="16px"
            bg="#a0ddad60"
            p="16px"
          >
            <SImgAvatar
              src="https://www.dairyfoods.com/ext/resources/DF/2020/August/df-100/GettyImages-1194287257.jpg?1597726305"
              width={100}
            />
            <div>
              <Text.Heading
                width="150px"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                fontWeight="bold"
                color="green"
              >
                {category.name}
              </Text.Heading>
              <Text.Body mt="4px">{category.description}</Text.Body>
            </div>
            <BiChevronRight color="green" size={24} />
          </Grid>
        ))}
      </Grid>
      <Text.Heading fontWeight="bold" mt="24px">
        Promotions
        <Grid
          gridAutoFlow="column"
          justifyContent="start"
          gridGap="16px"
          mt="16px"
        >
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </Grid>
      </Text.Heading>
    </SWrapper>
  );
}
