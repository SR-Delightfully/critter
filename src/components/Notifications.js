import React from "react";
import styled from "styled-components";
import { COLORS } from "../accessories/constants";
import { TiCogOutline } from "react-icons/ti";

export const Notifications = () => {
  return (
    <NotificationsWrapper>
      <NotificationHeader>
        <h1>Notifications</h1>
        <TiCogOutline />
      </NotificationHeader>
      <NotificationContent>Nothing to see here...</NotificationContent>
    </NotificationsWrapper>
  );
};

const NotificationsWrapper = styled.div`
  border-top: none;
  border-bottom: none;
  display: flex;
  flex-flow: column wrap;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const NotificationHeader = styled.div`
  color: ${COLORS.offWhite2};
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  padding: 1rem;
  justify-content: space-between;
  height: 50px;
  background-color: ${COLORS.offBlack};
`;

const NotificationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
