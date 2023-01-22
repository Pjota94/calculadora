import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 41px;

  label {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    margin-bottom: 5px;
    text-align: start;
    width: 311px;
  }

  > input {
    width: 311px;
    height: 45px;
    background: #322e2e;
    border: 1px solid #ffffff;
    border-radius: 8px;
    margin-bottom: 5px;
    padding-left: 5px;
    color: #ffffff;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    -webkit-appearance: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  button {
    width: 137px;
    height: 45px;
    background: #5ab1a2;
    border-radius: 10px;
    color: #ffffff;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    border: none;
  }

  button:hover {
    color: #322e2e;
  }

  > p {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 200;
    font-size: 10px;
    line-height: 12px;
    color: #ffffff;
    margin-bottom: 14px;
    width: 311px;
  }

  @media (max-width: 810px) {
    margin-top: 13px;

    label {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 14px;
      width: 224px;
    }

    input {
      width: 224px;
      margin-bottom: 3px;
    }

    button {
    }

    > p {
      width: 224px;
      margin-bottom: 10px;
    }
  }
`;
