import React, { useEffect, useState } from "react";
import { Container, CardWrapper } from "../../utils/Global.styled";
import {
  IntroWrapper,
  IntroLogo,
  IntroText,
  IntroTextTitle,
  IntroTextDescription,
  CardButtonWrapper,
} from "./Home.styled";
import Olympic from "../../images/introLogo.png";
import Button from "../../components/Button/Button";
import Card from "../../components/CardItem/CardItem";
import axios from "axios";

function Home() {
  const [totalSportBuilds, setTotalSportBuilds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/items")
      .then((response) => setTotalSportBuilds(response.data));
  }, []);

  const [showMore, setShowMoreState] = useState({ showMoreItems: false });

  function handleSetShowMoreState() {
    setShowMoreState({ showMoreItems: true });
  }

  const itemsToShow = showMore.showMoreItems ? totalSportBuilds.length : 3;

  return (
    <Container>
      <IntroWrapper>
        <IntroLogo src={Olympic} alt="Olympic" />
        <IntroText>
          <IntroTextTitle>Header</IntroTextTitle>
          <IntroTextDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Dignissimos et expedita iure minus temporibus. Asperiores
            blanditiis
            <br /> corporis dolore earum fugit laudantium nam perspiciatis,
            reiciendis
            <br /> repellendus unde. Atque delectus exercitationem ratione.
          </IntroTextDescription>
        </IntroText>
      </IntroWrapper>
      <CardWrapper>
        {totalSportBuilds.slice(0, itemsToShow).map((sportBuild) => {
          return <Card sportBuild={sportBuild} />;
        })}
      </CardWrapper>
      <CardButtonWrapper>
        <Button
          buttonText="View more"
          backgroundColor="#454545"
          color="#fff"
          fontSize="16"
          padding="20px 50px"
          onClick={() => handleSetShowMoreState()}
        />
      </CardButtonWrapper>
    </Container>
  );
}

export default Home;
