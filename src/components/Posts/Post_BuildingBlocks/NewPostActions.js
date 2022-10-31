import React from "react";
import styled from "styled-components";
// import { COLORS } from '../accessories/constants';
import {
  TiImageOutline,
  TiVideoOutline,
  TiChartBarOutline,
  TiCalendarOutline,
  TiLocationOutline,
} from "react-icons/ti";
import { CgSmileNeutral } from "react-icons/cg";
import { COLORS } from "../../../accessories/constants";

export const NewPostActions = () => {
  return (
    <ActionWrapper>
      <AddIMG>
        <TiImageOutline />
      </AddIMG>

      <AddVideo>
        <TiVideoOutline />
      </AddVideo>

      <AddPoll>
        <TiChartBarOutline />
      </AddPoll>

      <AddEmoji>
        <CgSmileNeutral />
      </AddEmoji>

      <AddSchedule>
        <TiCalendarOutline />
      </AddSchedule>

      <AddLocation>
        <TiLocationOutline />
      </AddLocation>
    </ActionWrapper>
  );
};

const ActionWrapper = styled.div`
  /* border: 1px solid tomato; */
  min-height: 4vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  && > div {
    color: ${COLORS.DesaturatedGreen};
  }
  && :hover {
    color: ${COLORS.offWhite2};
    cursor: not-allowed;
  }
`;
const AddIMG = styled.div``;
const AddVideo = styled.div``;
const AddPoll = styled.div``;
const AddEmoji = styled.div``;
const AddSchedule = styled.div``;
const AddLocation = styled.div``;
