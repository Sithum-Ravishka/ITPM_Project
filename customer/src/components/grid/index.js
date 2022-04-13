import styled from "styled-components";
import {
  alignItems,
  border,
  color,
  grid,
  justifyContent,
  layout,
  space,
} from "styled-system";

export const Grid = styled.div`
  display: grid;
  ${grid};
  ${justifyContent};
  ${alignItems};
  ${space};
  ${layout};
  ${border};
  ${color};
  cursor: pointer;
`;
