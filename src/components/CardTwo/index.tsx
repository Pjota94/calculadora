import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { Container } from "./styles";

const CardTwo = () => {
  const { switchCardTwo, daysPattern } = useContext(MainContext);

  return (
    <Container>
      <p className="text-init">VOCÊ RECEBERÁ:</p>
      <div className="div-line"></div>
      <div className="div-text-days">
        <p>
          Amanhã:
          <span>
            R$ {daysPattern[1] === undefined ? "0,00" : daysPattern[1]}
          </span>
        </p>
        <p>
          Em 15 dias:
          <span>
            R$ {daysPattern[15] === undefined ? "0,00" : daysPattern[15]}
          </span>
        </p>
        <p>
          Em 30 dias:
          <span>
            R$ {daysPattern[30] === undefined ? "0,00" : daysPattern[30]}
          </span>
        </p>
        <p>
          Em 90 dias:
          <span>
            R$ {daysPattern[90] === undefined ? "0,00" : daysPattern[90]}
          </span>
        </p>
      </div>
      <button onClick={switchCardTwo}>Editar dias</button>
    </Container>
  );
};

export default CardTwo;
