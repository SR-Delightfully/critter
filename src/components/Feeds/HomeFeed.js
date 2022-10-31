import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../accessories/constants";
import { CreateNewPost } from "../Posts/CreateNewPost";

import { SmallPostFormat } from "../Posts/SmallPostFormat";
import { LoadingScreen } from "../../accessories/LoadingScreen";

export const HomeFeed = ({ currentUser }) => {
  let currentUserInfo = currentUser.profile;
  const [tweetsById, setTweetsById] = useState(null);
  const [tweetIds, setTweetIds] = useState(null);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setTweetIds(data.tweetIds);
        setTweetsById(data.tweetsById);
      });
  }, [reload]);

  return (
    <>
      <HeaderWrapper>
        <HomeHeader>Home</HomeHeader>
      </HeaderWrapper>
      {!tweetsById ? (
        <LoadingScreen />
      ) : (
        <HomeWrapper>
          <CreateNewPost
            currentUserInfo={currentUserInfo}
            reload={reload}
            setReload={setReload}
          />
          <MainFeedContainer>
            {tweetIds.map((id) => {
              const {
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
              } = tweetsById[id];
              // setLikes(id.numLikes);
              return (
                <SmallPostFormat
                  id={id}
                  timestamp={timestamp}
                  status={status}
                  media={media}
                  retweetFrom={retweetFrom}
                  author={author}
                  handle={handle}
                  displayName={displayName}
                  isLiked={isLiked}
                  isRetweeted={isRetweeted}
                  numLikes={numLikes}
                  numRetweets={numRetweets}
                />
              );
            })}
          </MainFeedContainer>
        </HomeWrapper>
      )}
    </>
  );
};

const HomeWrapper = styled.div`
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

const MainFeedContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: ${COLORS.black};
  color: ${COLORS.DesaturatedGreen};
`;
const HomeHeader = styled.div`
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
  z-index: 10000;
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
