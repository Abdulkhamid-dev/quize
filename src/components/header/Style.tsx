import styled from "styled-components";
import { convertPxToRem } from "../../utils/index";

export const StyledHeader = styled.div`
  height: ${convertPxToRem(55)};
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${convertPxToRem(10)};
  .logo {
    cursor: pointer;
  }
`;
