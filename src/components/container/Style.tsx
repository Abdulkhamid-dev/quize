import styled from "styled-components";
import { convertPxToRem } from "../../utils/index";

export const StyledContainer = styled.div`
  max-width: ${convertPxToRem(1000)};
  width: 100%;
  padding: 0 ${convertPxToRem(15)};
  margin: 0 auto;
`;
