import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../accessories/constants";
import { NewPostActions } from "./Post_BuildingBlocks/NewPostActions";
export const CreateNewPost = ({ currentUserInfo, reload, setReload }) => {
  const [value, setValue] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    fetch("/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: value }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReload(!reload);
        setValue("");
      })
      .catch((error) => {
        console.log("[ ERROR ]");
      });
  };

  return (
    <CreatePost>
      <CurrentUsersAvatar src={currentUserInfo.avatarSrc} />
      <Form onSubmit={handleForm}>
        <WhatsHappening
          placeholder="What's Happening?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <NewPostActions />
        <FormSection>
          <WarningMessage> WIP </WarningMessage>
          <CharaCount>{250 - value.length}</CharaCount>
          <Button
            type="submit"
            disabled={value.length < 1 || value.length > 250}
          >
            click
          </Button>
        </FormSection>
      </Form>
    </CreatePost>
  );
};
const CreatePost = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: 4rem;
  min-height: 25vh;
  max-width: 100vw;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: ${COLORS.Black};
`;
const CurrentUsersAvatar = styled.img`
  float: left;
  height: 4rem;
  border-radius: 49%;
  &&:hover {
    filter: brightness(50%);
    transition: 0.75s;
  }
`;
const WhatsHappening = styled.textarea`
  border: 2px inset ${COLORS.black};
  border-radius: 5px;
  min-height: 6rem;
  width: 100%;
  background-color: ${COLORS.offBlack};
  color: #fff;
`;
const NavigationLink = styled(NavLink)`
  height: 4rem;
  width: 4rem;
  float: left;
  border-radius: 49%;
`;

const CharaCount = styled.h2`
  color: #fff;
  &&.ok {
    color: yellowgreen;
  }
  &&.warning {
    color: yellow;
  }
  &&.error {
    color: red;
  }
`;
const Form = styled.form`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
`;
const FormSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;
const WarningMessage = styled.h2`
  color: #fff;
`;
const Button = styled.button`
  background-color: ${COLORS.orange};
  color: ${COLORS.black};
  border: none;
  border-radius: 25px;
  font-family: "Trebuchet MS";
  font-size: 24px;
  padding: 4px 8px 4px 8px;
  margin: 4px;
  &&:hover {
    cursor: pointer;
    color: ${COLORS.DeepOrange};
  }
`;
