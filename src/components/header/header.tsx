import React from "react";
import { Link } from "react-router-dom";
import Container from "../container";
import { StyledHeader } from "./Style";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <div className="logo">
            <h3>FinalExam</h3>
          </div>
        </Link>
      </Container>
    </StyledHeader>
  );
}

export default Header;
