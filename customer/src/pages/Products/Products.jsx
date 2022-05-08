import React, { useState, useEffect, useCallback, useMemo } from "react";
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

export const Products = () => {
  const [categories, setCategories] = useState([]);
  const [rawProducts, setRawProducts] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const selectedCategory = useMemo(
    () => categories.find(({ _id }) => _id === categoryId),
    [categories, categoryId]
  );

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

  // TODO: Filter products by category id
  const products = rawProducts;

  return (
    <SWrapper>
      <Grid
        gridAutoFlow="column"
        justifyContent="start"
        gridGap="16px"
        mt="16px"
      >
        {[{ name: "All", _id: "-1" }]
          .concat(categories || [])
          .map((category) => (
            <Grid
              key={category._id}
              width="max-content"
              gridAutoFlow="column"
              justifyContent="space-between"
              alignItems="center"
              border="1px solid #a0ddad"
              borderBottomLeftRadius="16px"
              borderTopRightRadius="16px"
              onClick={() => setCategoryId(category._id)}
              bg={
                (!selectedCategory && category._id) === "-1"
                  ? "#a0ddad60"
                  : selectedCategory && selectedCategory._id === category._id
                  ? "#a0ddad60"
                  : "white"
              }
              p="16px"
            >
              <Text.SmallHeading
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                fontWeight="bold"
                color="green"
              >
                {category.name}
              </Text.SmallHeading>
            </Grid>
          ))}
      </Grid>
      <Grid
        gridAutoFlow="column"
        justifyContent="start"
        gridGap="16px"
        mt="32px"
      >
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </SWrapper>
  );
};
