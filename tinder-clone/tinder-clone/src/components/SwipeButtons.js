import { IconButton } from "@material-ui/core";
import { Close, Favorite, FlashOn, Replay, Star } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function SwipeButtons() {
  return (
    <SwipeButtonsContainer>
      <SwipeButtonsRepeat>
        <Replay fontSize="large" />
      </SwipeButtonsRepeat>
      <SwipeButtonsLeft>
        <Close fontSize="large" />
      </SwipeButtonsLeft>
      <SwipeButtonsStar>
        <Star fontSize="large" />
      </SwipeButtonsStar>
      <SwipeButtonsRight>
        <Favorite fontSize="large" />
      </SwipeButtonsRight>
      <SwipeButtonsLightning>
        <FlashOn fontSize="large" />
      </SwipeButtonsLightning>
    </SwipeButtonsContainer>
  );
}

export default SwipeButtons;

const SwipeButtonsContainer = styled.div`
  display: flex;
  bottom: 10vh;
  position: fixed;
  width: 100%;
  justify-content: space-evenly;

  .MuiIconButton-root {
    background-color: white;
    box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
  }
`;

const SwipeButtonsRepeat = styled(IconButton)`
  padding: 3vw !important;
  color: #f5b748 !important;
`;

const SwipeButtonsLeft = styled(IconButton)`
  padding: 3vw !important;
  color: #ec5e6f !important;
`;

const SwipeButtonsStar = styled(IconButton)`
  padding: 3vw !important;
  color: #62b4f9 !important;
`;

const SwipeButtonsRight = styled(IconButton)`
  padding: 3vw !important;
  color: #76e2b3 !important;
`;

const SwipeButtonsLightning = styled(IconButton)`
  padding: 3vw !important;
  color: #915dd1 !important;
`;
