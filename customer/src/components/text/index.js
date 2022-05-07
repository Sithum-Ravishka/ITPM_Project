import styled, { css } from "styled-components";
import {
  border,
  color,
  flexbox,
  grid,
  layout,
  space,
  typography,
} from "styled-system";

const styledSystem = css`
  ${space}
  ${typography}
  ${color}
  ${grid}
  ${layout}
  ${border}
  ${flexbox}
`;

const Body = styled.div`
  font-size: 0.8125rem;
  line-heigh: 1rem;
  ${styledSystem}
`;

const Heading = styled.div`
  font-size: 1.25rem;
  line-heigh: 1.5rem;
  ${styledSystem}
`;

const SmallHeading = styled.div`
  font-size: 1rem;
  line-heigh: 1.25rem;
  ${styledSystem}
`;

const MediumHeading = styled.div`
  font-size: 1.125rem;
  line-heigh: 1.25rem;
  ${styledSystem}
`;

export const Text = {
  SmallHeading,
  MediumHeading,
  Heading,
  Body,
};
