import React from "react";
import styled from "styled-components";
import { COLORS } from "./constants";

export const Button = ({ buttonText, requestType, setRequestType }) => {
  return (
    <BTN
      className={buttonText === requestType ? "selected" : null}
      type="button"
      onClick={() => setRequestType(buttonText)}
    >
      {buttonText} C L I C K
    </BTN>
  );
};
const BTN = styled.button`
  background-color: ${COLORS.orange};
  color: ${COLORS.black};
  border: none;
  border-radius: 25px;
  font-family: "Trebuchet MS";
  font-size: 24px;
  padding: 4px 8px 4px 8px;
  margin: 4px;
  &&:hover {
    cursor: pointer;
    color: ${COLORS.DeepOrange};
  }
`;
