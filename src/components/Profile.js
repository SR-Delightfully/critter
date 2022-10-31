import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  TiArrowLeftThick,
  TiLocation,
  TiLink,
  TiGift,
  TiCalendar,
} from "react-icons/ti";
import { COLORS } from "../accessories/constants";
import { CurrentUserContext } from "./CurrentUserContext";
import { LoadingScreen } from "../accessories/LoadingScreen";
import { SmallPostFormat } from "./Posts/SmallPostFormat";

export const Profile = () => {
  const { handle } = useParams();

  // const [usersTweets, setUsersTweets] = useState([]);

  const [tweetsById, setTweetsById] = useState(null);
  const [tweetIds, setTweetIds] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/${handle}/feed`)
      .then((res) => res.json())
      .then((data) => {
        setTweetIds(data.tweetIds);
        setTweetsById(data.tweetsById);
      });
  }, [handle]);
  useEffect(() => {
    fetch(`/api/${handle}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.profile);
      });
  }, [handle]);

  return (
    <>
      {!user ? (
        <LoadingScreen />
      ) : (
        <>
          <HeaderWrapper>
            <ProfileHeader>{user.handle}</ProfileHeader>
          </HeaderWrapper>
          <ProfileWrapper>
            <UserCard className="userCard">
              {/* User's Avatar */}
              <UserBanner src={user.bannerSrc} />
              <UserAvatar src={user.avatarSrc} />

              {/* User's Information */}
              <UserInfo>
                <h1>{user.displayName}</h1>
                <h2>@{user.handle}</h2>
                <p>{user.bio}</p>
              </UserInfo>
              <Extras>
                <ExtraUserInfo>
                  <p>
                    <TiLocation />
                    {user.location}
                  </p>
                  <p>
                    <TiCalendar />
                    {user.joined}
                  </p>
                </ExtraUserInfo>
                {/* Following/Followers? */}
                <ExtraData>
                  <p>{user.numFollowing} Following</p>
                  <p>{user.numFollowers} Followers</p>
                </ExtraData>
              </Extras>
            </UserCard>
            <TweetsContainer>
              {tweetIds.map((id) => {
                const {
                  timestamp,
                  status,
                  media,
                  retweetFrom,
                  author,
                  isLiked,
                  isRetweeted,
                  numLikes,
                  numRetweets,
                } = tweetsById[id];

                return (
                  <SmallPostFormat
                    id={id}
                    timestamp={timestamp}
                    status={status}
                    media={media}
                    retweetFrom={retweetFrom}
                    author={author}
                    isLiked={isLiked}
                    usRetweeted={isRetweeted}
                    numLikes={numLikes}
                    numRetweets={numRetweets}
                  />
                );
              })}
            </TweetsContainer>
          </ProfileWrapper>
        </>
      )}
    </>
  );
};
const UserCard = styled.div`
  min-height: 35rem;
  width: 100%;
  border: 1px solid ${COLORS.DeepGreen};
  overflow: hidden;
  color: ${COLORS.DesaturatedGreen};
  background-color: ${COLORS.offBlack};
  display: block;
`;

const ReturnButton = styled.button`
  height: 50px;
  width: 50px;
  margin-right: 0.5rem;
  background-color: ${COLORS.offBlack};
  border: 1px solid ${COLORS.DullGreen};
  &:hover {
    background-color: ${COLORS.orange};
    color: ${COLORS.DeepOrange};
    border: 1px solid ${COLORS.DeepOrange};
  }
`;
const UserBanner = styled.img`
  background-size: cover;
  border-bottom: 2px solid ${COLORS.DeepGreen};
  height: 20vmax;
  z-index: -9999;
  background-color: ${COLORS.transparent};
`;
const UserAvatar = styled.img`
  background-size: cover;
  border: 5px solid ${COLORS.offBlack};
  border-radius: 100%;
  height: 8rem;
  width: 8rem;
  margin-top: -4rem;
  margin-left: 4rem;
  background-color: ${COLORS.transparent};
  z-index: 100;
`;
const UserInfo = styled.div`
  border: 1px solid ${COLORS.DeepGreen};
  padding-left: 1rem;
  z-index: 0;
  padding-top: 1rem;
  & > p {
    font-size: 18px;
    padding-top: 1rem;
  }
  & > h1 {
    color: ${COLORS.offWhite};
  }
  & > h2 {
    color: ${COLORS.offWhite4};
  }
`;

const Extras = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  & > div {
    font-size: 18px;
    font-family: monospace;
    color: ${COLORS.DullGreen};
    gap: 1rem;
  }
`;
const ExtraData = styled.div`
  display: flex;
`;
const ExtraUserInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

const TweetsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: ${COLORS.black};
  color: ${COLORS.DesaturatedGreen};
`;

const ProfileWrapper = styled.div`
  grid-area: mainContent;
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  background-color: ${COLORS.black};
  flex-flow: column nowrap;
  gap: 1rem;
  border-top: none;
  border-bottom: none;
  overflow-x: visible;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const ProfileHeader = styled.div`
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
  z-index: 999999;
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
