import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../accessories/constants";
export const PostContent = (status) => {
  const content = status.status;
  const media = status.media;
  return (
    <ContentContainer>
      {content}
      <MediaWrapper>
        {/* {media.map((image) => {
          return <img src={image.url} />;
        })} */}
      </MediaWrapper>
    </ContentContainer>
  );
};
const ContentContainer = styled.div`
  width: 100%;
  min-height: 5rem;
  border: 2px inset ${COLORS.black};
  background-color: ${COLORS.offBlack};
  color: ${COLORS.offWhite3};
  font-size: 1rem;
  padding: 0.5rem;
  gap: 1rem;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
`;

const MediaWrapper = styled.div`
  overflow: none;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  && > img {
    height: 100%;
    width: 100%;
  }
`;
