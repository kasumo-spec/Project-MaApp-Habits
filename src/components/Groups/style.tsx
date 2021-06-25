import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(
    to bottom right,
    #9590f1,
    #8b85eefc,
    #d1cef8
  );
  width: 100%;
  height: calc(100vh - 56px);
  padding: 10px;
  h1 {
    font-size: 1.5rem;
    padding: 10px;
    text-align: left;
    color: #000000d9;
  }
  @media (min-width: 850px) {
    height: calc(100vh - 65px);
    padding-left: 30px;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 100%;
  display: flex;
  height: 80%;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  overflow-y: auto;
  h2 {
    font-size: 1.2rem;
  }
  @media (min-width: 900px) {
    max-width: 60%;
    h2 {
      font-size: 1.5rem;
    }
  }
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #6c63ff73;
  }
`;

export const GroupContent = styled.div`
  box-shadow: 0px 1px 3px 1px #726e6efc;
  background-color: #6c63ffab;
  border: 1px solid var(--borderButton);
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 5px;
  text-align: left;
  border-radius: 10px;
  align-items: center;
  &:hover {
    box-shadow: inset 0px 1px 3px 1px #726e6efc;
  }
`;

export const GroupInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.5rem;
  }
  p {
    margin: 3px 0;
  }
  span {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  @media (min-width: 900px) {
    max-width: 50%;
  }
`;

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 10px;
  font-weight: 700;
  width: 100%;
  height: 50px;
  background-color: var(--backgroundButton);
  border: 1px solid var(--colorButton);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 20px;
  color: #6b6af5;
  max-width: 260px;
  transition: all 0.5s;
  &:hover {
    background-color: #c4d7d1;
  }
  &:first-child {
    margin-right: 6px;
  }
  @media (min-width: 900px) {
    width: 45%;
  }
`;

export const InfoButton = styled(Button)`
  .MuiSvgIcon-root {
    font-size: 25px;
  }
`;

export const DeleteButton = styled(Button)`
  .MuiSvgIcon-root {
    font-size: 25px;
  }
`;

export const StyleButtonDiv = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80px !important;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row !important;
    align-items: initial;
    justify-content: space-around;
  }
`;
