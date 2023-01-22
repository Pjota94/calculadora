import styled from "styled-components";

export const Container = styled.div`
  width: 275px;
  height: 464px;
  background: #5ab1a2;
  border-radius: 0px 8px 8px 0px;

  .text-init-days {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
    margin-top: 60px;
    margin-left: 32px;
  }

  .div-line {
    width: 212px;
    border: 1px solid #000000;
    transform: rotate(-0.27deg);
    margin-left: 32px;
  }

  .div-text-days {
    display: flex;
    flex-direction: column;
    margin-top: 29px;
    margin-left: 45px;
  }

  .div-text-days > p {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
    margin-bottom: 8px;
  }

  span {
    color: #000000;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    margin-left: 6px;
  }

  p > input {
    border: none;
    background-color: transparent;
    width: 35px;
    height: 19px;
    cursor: pointer;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
  }

  p > input::placeholder {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: #000000;
  }

  > button {
    margin-left: 23px;
    margin-top: 20px;
    border: none;
    background-color: transparent;
    font-size: 40px;
  }

  .btn-edit-days {
    width: 137px;
    height: 45px;
    background: #322e2e;
    border-radius: 10px;
    border: none;
    margin-top: 29px;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
    margin-left: 69px;
  }

  .btn-edit-days:hover {
    color: #5ab1a2;
  }

  @media (max-width: 810px) {
    width: 279px;
    height: 189px;
    border-radius: 0px 0px 8px 8px;

    .text-init-days {
      margin-top: -11px;
      margin-left: 43px;
    }

    .div-line {
      margin-left: 43px;
    }

    .div-text-days {
      margin-left: 46px;
      margin-top: 8px;
    }

    .div-text-days > p {
      font-size: 14px;
      line-height: 18px;
    }

    span {
      font-size: 14px;
      line-height: 18px;
    }

    > button {
      margin-left: 4px;
      margin-top: 6px;
      border: none;
      background-color: transparent;
      font-size: 28px;
    }

    .text-init {
      margin-top: -10px;
      margin-left: 28px;
    }

    .btn-edit-days {
      width: 102px;
      height: 30px;
      background: #322e2e;
      border-radius: 10px;
      border: none;
      margin-top: -2px;
      font-family: "Lexend";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 25px;
      color: #ffffff;
      margin-left: 85px;
    }
  }
`;
