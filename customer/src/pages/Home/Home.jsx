import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Grid } from "../../components/grid";
import axios from "axios";
import { BiChevronRight } from "react-icons/bi";

const SWrapper = styled.div`
  background-color: white;
  margin: 16px;
  margin-top: 0px;
  border-radius: 16px;
  height: 85vh;
`;

const getCategories = async () => {
  return await axios.get("http://localhost:8800/api/categories");
};

export default function Home() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    const { data } = await getCategories();
    setCategories(data);
  }, [setCategories]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <SWrapper>
      <Grid
        gridAutoFlow="column"
        justifyContent="start"
        gridGap="16px"
        p="16px"
      >
        {categories.map((category) => (
          <Grid
            key={category._id}
            width="200px"
            gridAutoFlow="column"
            justifyContent="space-between"
            alignItems="center"
            border="1px solid #a0ddad"
            borderBottomLeftRadius="16px"
            borderTopRightRadius="16px"
            bg="#a0ddad60"
            p="16px"
          >
            <div>
              <h2 style={{ margin: 0, color: "green" }}>{category.name}</h2>
              <p style={{ margin: 0 }}>{category.description}</p>
            </div>
            <BiChevronRight color="green" size={24} />
          </Grid>
        ))}
      </Grid>
    </SWrapper>
  );
}
