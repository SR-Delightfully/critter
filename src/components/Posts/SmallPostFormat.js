import React, { useState } from "react";
import styled from "styled-components";

import { PostActions } from "./Post_BuildingBlocks/PostActions";
import { PostContent } from "./Post_BuildingBlocks/PostContent";
import { Avatar } from "./Post_BuildingBlocks/Avatar";
import { COLORS } from "../../accessories/constants";
import { NavLink, useHistory } from "react-router-dom";
import { LoadingScreen } from "../../accessories/LoadingScreen";
export const SmallPostFormat = ({
  id,
  timestamp,
  status,
  media,
  retweetFrom,
  author,
  displayName,
  handle,
  isLiked,
  isRetweeted,
  numLikes,
  numRetweets,
}) => {
  // const author = id.author;
  const history = useHistory();

  // TO DO: make counter functional ⤵️
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    console.log("you liked this!!");
    if (!liked) {
      setLikes(likes + 1);
      setLiked(!liked);
    } else {
      setLikes(likes - 1);
      setLiked(!liked);
    }
  };
  return (
    <>
      <SmallPostWrapper>
        <div
          onClick={(event) => {
            event.stopPropagation();
            history.push(`/tweet/${id}`);
          }}
        >
          <User>
            <Avatar author={author} />
            <div
              onClick={(event) => {
                event.stopPropagation();
                history.push(`/${author.handle}`);
              }}
            >
              <h1>{author.displayName}</h1>
              <h2>@{author.handle}</h2>
            </div>
            <h2>{timestamp}</h2>
          </User>
          <PostContent status={status} media={media} />
        </div>
        <PostActions
          id={id}
          likes={likes}
          isLiked={isLiked}
          handleClick={handleClick}
        />
      </SmallPostWrapper>
      {/* )} */}
    </>
  );
};

const SmallPostWrapper = styled.div`
  border: 2px inset ${COLORS.black};
  min-height: 25vh;
  max-width: 100%;
  gap: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &&:hover {
    cursor: pointer;
    background-color: #00000080;
    transition: background-color 2s ease;
  }
`;
const User = styled.div`
  color: ${COLORS.offWhite4};
  max-width: 100vw;
  display: flex;
  align-items: center;
  gap: 4px;
  & h1 {
    font-size: 1rem;
  }
  & h2 {
    font-size: 0.75rem;
  }
`;
