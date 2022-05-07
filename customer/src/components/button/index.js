import styled from "styled-components";
import { color, space } from "styled-system";

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 16px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 0px;
  border: none;
  background-color: green;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: max-content;
  ${space};
  ${color}
`;
