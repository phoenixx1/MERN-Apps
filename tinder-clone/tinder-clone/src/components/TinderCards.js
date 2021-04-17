import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Jeff Bezos",
      url:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455",
    },
    {
      name: "Satya Nadella",
      url: "https://img.caixin.com/2018-11-24/1543035822545341.jpg",
    },
  ]);

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
            <Card style={{ backgroundImage: `url(${person.url})` }}>
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
