import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { Container } from "./styles";
import { MdOutlineArrowBackIos } from "react-icons/md";

const CardDays = () => {
  const { switchCardTwo, setVamoVe, daysEdited } = useContext(MainContext);

  const [primeiro, setPrimeiro] = useState("");
  const [segundo, setSegundo] = useState("");
  const [terceiro, setTerceiro] = useState("");

  const test = (e: any) => {
    e.preventDefault();

    setVamoVe([primeiro, segundo, terceiro]);
  };

  return (
    <Container>
      <button onClick={switchCardTwo}>
        <MdOutlineArrowBackIos />
      </button>

      <p className="text-init-days">VOCÊ RECEBERÁ:</p>
      <div className="div-line"></div>
      <form action="" onSubmit={test}>
        <div className="div-text-days">
          <p>
            Em{" "}
            <input
              required
              placeholder="--"
              onChange={(event) => setPrimeiro(event.target.value)}
            />{" "}
            dias:
            <span>
              R${" "}
              {daysEdited[primeiro] === undefined
                ? "0,00"
                : daysEdited[primeiro]}
            </span>
          </p>
          <p>
            Em{" "}
            <input
              required
              placeholder="--"
              onChange={(event) => setSegundo(event.target.value)}
            />{" "}
            dias:
            <span>
              R${" "}
              {daysEdited[segundo] === undefined ? "0,00" : daysEdited[segundo]}
            </span>
          </p>
          <p>
            Em{" "}
            <input
              required
              placeholder="--"
              onChange={(event) => setTerceiro(event.target.value)}
            />{" "}
            dias:
            <span>
              R${" "}
              {daysEdited[terceiro] === undefined
                ? "0,00"
                : daysEdited[terceiro]}
            </span>
          </p>
        </div>
        <button type="submit" className="btn-edit-days">
          Confirmar
        </button>
      </form>
    </Container>
  );
};

export default CardDays;
