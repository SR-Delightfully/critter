import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Avatar = ({ author }) => {
  // console.log(author);
  return (
    <UserWrapper>
      <NavigationLink to={`/${author.handle}`}>
        <AuthorsAvatar src={author.avatarSrc} />
      </NavigationLink>
    </UserWrapper>
  );
};
const UserWrapper = styled.div`
  border: 1px solid tomato;
  height: 4rem;
  width: 4rem;
  border-radius: 49%;
`;
const AuthorsAvatar = styled.img`
  float: left;
  height: 4rem;
  width: 4rem;
  border-radius: 49%;
  &&:hover {
    filter: brightness(50%);
    transition: 0.75s;
  }
`;
const NavigationLink = styled(NavLink)`
  height: 4rem;
  width: 4rem;
  float: left;
  border-radius: 49%;
`;
