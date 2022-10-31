import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bugLogo from "../accessories/bug.png";

export const Logo = () => {
  return (
    <NavLink to="/">
      <LogoIMG></LogoIMG>
    </NavLink>
  );
};

const LogoIMG = styled.img`
  background-image: url(${bugLogo});
  height: 6rem;
  width: 6rem;
`;
