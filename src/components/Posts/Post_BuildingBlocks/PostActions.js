import React, { useState } from "react";
import styled from "styled-components";
// import { COLORS } from '../accessories/constants';
import {
  TiPencil,
  TiArrowRepeatOutline,
  TiHeartOutline,
  TiExportOutline,
} from "react-icons/ti";
import { COLORS } from "../../../accessories/constants";

export const PostActions = ({ id, handleClick, likes, isLiked }) => {
  return (
    <ActionWrapper>
      <Action>
        <Comment>
          <TiPencil />
        </Comment>
        0
      </Action>

      <Action>
        <ReTweet>
          <TiArrowRepeatOutline />
        </ReTweet>
        0
      </Action>
      <Action>
        <Like className="like" onClick={handleClick}>
          <TiHeartOutline />
        </Like>
        {likes}
      </Action>

      <Action>
        <Share>
          <TiExportOutline />
        </Share>
        0
      </Action>
    </ActionWrapper>
  );
};

const ActionWrapper = styled.div`
  border: 2px outset ${COLORS.DeepGreen};
  min-height: 4vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.black};
`;
const Action = styled.div`
  min-height: 4vh;
  flex: 1;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  && > div {
    color: #000;
    height: 2.5rem;
    width: 2.5rem;
    box-shadow: inset 0 0 10px ${COLORS.deepTangerine};
    border: 2px solid ${COLORS.DeepOrange};
    display: flex;
    margin: 0.2em;
    border-radius: 5rem;
    background-color: ${COLORS.tangerine};
    justify-content: center;
    align-items: center;
  }
  && > div:hover {
    background-color: ${COLORS.deepTangerine};
    box-shadow: inset 0 0 10px ${COLORS.DeepOrange};
    border: 2px solid ${COLORS.DeepOrange};
    color: ${COLORS.offWhite};
    cursor: pointer;
  }
`;
const Comment = styled.div`
  &&:hover {
    color: ${COLORS.DeepGreen};
  }
`;
const ReTweet = styled.div`
  &&:hover {
    color: ${COLORS.BrightGreen};
  }
`;
const Like = styled.div`
  &&:hover {
    color: ${COLORS.orange};
  }
  &&.liked {
    background-color: ${COLORS.deepTangerine};
    box-shadow: inset 0 0 10px ${COLORS.DeepOrange};
    border: 2px solid ${COLORS.DeepOrange};
    color: ${COLORS.offWhite};
  }
`;
const Share = styled.div`
  &&:hover {
    color: ${COLORS.DeepOrange};
  }
`;
