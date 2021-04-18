import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: ", +nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <Tinder>
      <TinderCardsContainer>
        {people.map((person) => (
          <SwipeCard
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <Card style={{ backgroundImage: `url(${person.imgUrl})` }}>
              <CardContent>
                <h3>{person.name}</h3>
              </CardContent>
            </Card>
          </SwipeCard>
        ))}
      </TinderCardsContainer>
    </Tinder>
  );
}

export default TinderCards;

const Tinder = styled.div``;
const TinderCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;
const SwipeCard = styled(TinderCard)`
  position: absolute;
`;

const Card = styled.div`
  position: relative;
  background-color: #fff;
  width: 600px;
  padding: 20px;
  max-width: 85vw;
  height: 50vh;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;

  > h3 {
    position: absolute;
    bottom: 0;
    margin: 10px;
    color: #fff;
  }
`;
