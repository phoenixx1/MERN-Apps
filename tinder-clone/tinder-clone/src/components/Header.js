import React from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <HeaderContainer>
      <HeaderIcon>
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      </HeaderIcon>

      <TinderLogo
        src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
        alt=""
      />
      <HeaderIcon>
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </HeaderIcon>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  border-bottom: 1px solid #f9f9f9;
`;

const HeaderIcon = styled.div`
  padding: 20px;
`;

const TinderLogo = styled.img`
  object-fit: contain;
  height: 40px;
`;
