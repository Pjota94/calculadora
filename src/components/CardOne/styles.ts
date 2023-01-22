import styled from "styled-components";

export const Container = styled.div`
  width: 504px;
  height: 464px;
  background: #322e2e;
  border-radius: 8px 0px 0px 8px;

  > p {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
    text-align: center;
    margin-top: 56px;
  }

  @media (max-width: 810px) {
    width: 279px;
    height: 365px;
    border-radius: 8px 8px 0px 0px;

    > p {
      font-size: 16px;
      line-height: 20px;
      margin-top: 13px;
    }
  }
`;
