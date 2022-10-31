import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import {
  TiHomeOutline,
  TiUserOutline,
  TiBell,
  TiBookmark,
} from "react-icons/ti";
import { COLORS } from "../accessories/constants";
import { Logo } from "../accessories/Logo";
import { Button } from "../accessories/Button";
import { CurrentUserContext } from "./CurrentUserContext";

export const SideBar = () => {
  const profile = useContext(CurrentUserContext).currentUser.profile;
  const history = useHistory();
  return (
    <SidebarWrapper className="sidebar">
      <Logo />
      <Nav
        onClick={(event) => {
          history.push("/");
        }}
      >
        <TiHomeOutline size={32} /> Home
      </Nav>
      <Nav
        onClick={(event) => {
          history.push(`/${profile.handle}`);
        }}
      >
        <TiUserOutline size={32} /> Profile
      </Nav>
      <Nav
        onClick={(event) => {
          history.push("/notifications");
        }}
      >
        <TiBell size={32} /> Notifications
      </Nav>
      <Nav
        onClick={(event) => {
          history.push("/bookmarks");
        }}
      >
        <TiBookmark size={32} /> Bookmarks
      </Nav>
      <Button />
    </SidebarWrapper>
  );
};

// Only Styled Components below here ⤵

const SidebarWrapper = styled.div`
  border-right: 1px solid ${COLORS.DeepGreen};
  grid-area: sideBar;
  height: 100vh;
  float: left;
  background-color: ${COLORS.offBlack};

  display: flex;
  align-items: flex-start;
  align-content: flex-end;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
const Nav = styled.div`
  border: 1px solid transparent;
  color: ${COLORS.DullGreen};
  padding: 5px 10px 5px 10px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  gap: 0.75rem;
  &.active {
    text-decoration: underline;
    text-decoration-thickness: 0.1rem;
    text-decoration-color: ${COLORS.textActive};
    color: ${COLORS.BrightGreen};
  }
  &:hover {
    background-color: ${COLORS.black};
    border: 1px solid #000;
    color: ${COLORS.tangerine};
    transition: 0.75s;
  }
`;
