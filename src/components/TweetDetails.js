import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../accessories/constants";
// import { Avatar } from "./Posts/Post_BuildingBlocks/Avatar";
// import { PostActions } from "./Posts/Post_BuildingBlocks/PostActions";
// import { PostContent } from "./Posts/Post_BuildingBlocks/PostContent";
import { LargePostFormat } from "./Posts/LargePostFormat";
import { LoadingScreen } from "../accessories/LoadingScreen";

export const TweetDetails = () => {
  const { tweetId } = useParams();

  const [viewedTweet, setViewedTweet] = useState(null);
  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        setViewedTweet(data.tweet);
      });
  }, []);
  return (
    <>
      {!viewedTweet ? (
        <LoadingScreen />
      ) : (
        <TweetDetailsWrapper>
          <HeaderWrapper>
            <TweetHeader>Tweet</TweetHeader>
          </HeaderWrapper>
          <LargePostFormat
            id={viewedTweet.id}
            timestamp={viewedTweet.timestamp}
            status={viewedTweet.status}
            media={viewedTweet.media}
            retweetFrom={viewedTweet.retweetFrom}
            author={viewedTweet.author}
            isLiked={viewedTweet.isLiked}
            isRetweeted={viewedTweet.isRetweeted}
            numLikes={viewedTweet.numLikes}
            numRetweets={viewedTweet.numRetweets}
          />
        </TweetDetailsWrapper>
      )}
    </>
  );
};

const TweetDetailsWrapper = styled.div`
  grid-area: mainContent;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  background-color: ${COLORS.black};
  flex-flow: column nowrap;
  gap: 0.5rem;
  border-top: none;
  border-bottom: none;
  overflow-x: visible;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    display: none;
  }
`;
const TweetHeader = styled.div`
  border: 2px inset ${COLORS.DeepGreen};
  margin-top: -0.5rem;
  color: ${COLORS.offWhite2};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  padding: 1rem;
  height: 50px;
  width: 100%;
  background-color: #00000080;
  backdrop-filter: blur(3px);
  z-index: 1;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  grid-area: mainContent;
  box-shadow: inset 0 0 10px #000000;
`;

export default TweetDetails;
