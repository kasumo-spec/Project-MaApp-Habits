import { Button } from "@material-ui/core";
import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: #00000055;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ContentModal = styled.div`
  border-radius: 20px;
  background-color: white;
  border: 2px solid black;
  width: 85%;
  height: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 20px;
  @media (min-width: 800px) {
    justify-content: space-around;
  }
`;

export const ContentInfoModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  padding-top: 10px;
  @media (min-width: 800px) {
    padding-top: 10px;
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const ButtonContentModal = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

export const GoalsDiv = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  overflow-x: auto;
  @media (min-width: 800px) {
    width: 60%;
  }
`;

export const ActivityDiv = styled.div`
  width: 100%;
  height: 90%;
  overflow-x: auto;
  border-radius: 20px;
  margin-right: 0px;
  @media (min-width: 800px) {
    width: 35%;
    margin-right: 3rem;
  }
`;

export const AddButton = styled(Button)`
  .MuiSvgIcon-root {
    font-size: 25px;
  }
`;
