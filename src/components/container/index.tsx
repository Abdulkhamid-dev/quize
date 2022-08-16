import React from "react";
import { StyledContainer } from "./Style";

interface Props {
  children?: JSX.Element | JSX.Element[];
}
function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
