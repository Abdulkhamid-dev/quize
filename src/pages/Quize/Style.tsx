import styled from "styled-components";
import { convertPxToRem } from "../../utils/index";

export const StyledQuize = styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .btn_wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .question_btn {
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: ${convertPxToRem(5)} ${convertPxToRem(15)};
    cursor: pointer;
  }
  .card {
    margin: ${convertPxToRem(20)} ${convertPxToRem(0)};
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    .card_header {
      padding: 0.75rem 1.25rem;
      margin-bottom: 0;
      background-color: rgba(0, 0, 0, 0.03);
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      h5{
        font-size: ${convertPxToRem(18)};
        font-weight: 600;
      }
    }
    .card_footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
