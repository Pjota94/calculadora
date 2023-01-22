import { useContext } from "react";
import CardDays from "../components/CardDays";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import { MainContext } from "../context/MainContext";
import { Container } from "./styles";

const Home = () => {
  const { cardDays } = useContext(MainContext);

  return (
    <Container>
      <CardOne />
      {cardDays ? <CardTwo /> : <CardDays />}
    </Container>
  );
};

export default Home;
