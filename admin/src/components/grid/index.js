import styled from "styled-components";
import { alignItems, grid, justifyContent, space } from "styled-system";

export const Grid = styled.div`
  display: grid;
  ${grid};
  ${space};
  ${justifyContent};
  ${alignItems};
`;
