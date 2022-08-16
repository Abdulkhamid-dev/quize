import styled from "styled-components";
import { convertPxToRem } from "../utils";

export const StyledStartPage = styled.div`
  .form_item {
    display: flex;
    flex-direction: column;
    label {
      color: rgba(0, 0, 0, 0.54);
      padding: 0;
      font-size: ${convertPxToRem(16)};
      font-family: "Roboto";
      font-weight: 400;
    }
    select {
      border: none;
      border-bottom: ${convertPxToRem(1)} solid black;
      padding: ${convertPxToRem(8)} ${convertPxToRem(2)};
      font-size: ${convertPxToRem(18)};
      transform: 0.3s all ease-in-out;
      outline: none;
      margin: ${convertPxToRem(6)} ${convertPxToRem(0)};
      &:hover {
        border-bottom: ${convertPxToRem(3)} solid black;
      }
    }
  }
  .start_btn {
    font-size: ${convertPxToRem(18)};
    font-weight: 500;
    background: #44ef3e;
    color: white;
    outline: none;
    border: none;
    border-radius: ${convertPxToRem(6)};
    width: 100%;
    padding: ${convertPxToRem(8)} ${convertPxToRem(4)};
    margin: ${convertPxToRem(8)} ${convertPxToRem(0)};
    transform: all 0.3s ease-in;
    box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.75);
    &:hover {
      background: #1fb61a;
    }
  }
`;
