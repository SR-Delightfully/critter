import React from "react";
import styled, { keyframes } from "styled-components";
import { COLORS } from "../accessories/constants";
export const LoadingScreen = () => {
  return (
    <LoadingWrapper>
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
    </LoadingWrapper>
  );
};
const breathe = keyframes`
 0% { height: 10px;}
 25% { height: 25px; border-radius: 2px;}
 50% { height: 50px; border-radius: 5px;}
 75% { height: 15px; border-radius: 2px;}
 100% { height: 10px;}
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${COLORS.black};
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 999999;
  && > div {
    height: 10px;
    width: 10px;
  }
`;
const Bar1 = styled.div`
  background-color: ${COLORS.deepTangerine};
  animation: ${breathe} 0.75s 0.1s linear infinite;
`;
const Bar2 = styled.div`
  background-color: ${COLORS.tangerine};
  animation: ${breathe} 0.75s 0.2s linear infinite;
`;
const Bar3 = styled.div`
  background-color: ${COLORS.orange};
  animation: ${breathe} 0.75s 0.3s linear infinite;
`;
const Bar4 = styled.div`
  background-color: ${COLORS.DeepOrange};
  animation: ${breathe} 0.75s 0.4s linear infinite;
`;
