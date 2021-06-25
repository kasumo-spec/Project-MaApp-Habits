import styled from "styled-components";

export const Container = styled.div`
  background-color: #b2acfa;
  height: auto;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    padding: 30px;
    font-size: 3.3em;
    color: #000000bf;
  }

  @media (min-width: 600px) {
    h1 {
      text-align: start;
      padding: 15px;
    }
  }
  @media (min-width: 769px) {
    height: calc(100vh - 65px);
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const Pagination = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 40px !important;
  }

  div {
    width: 40px;
  }
`;
