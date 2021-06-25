import styled from "styled-components";
import { TextField, Button, NativeSelect } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  @media (min-width: 600px) {
    justify-content: center;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Content = styled.form`
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 600px) {
    width: 50%;
    height: 545px;
  }
`;

export const StyledInput = styled(TextField)`
  background-color: var(--backgroundInputPopUp);
  width: 300px;
  margin: 20px;
`;

export const ButtonStyled = styled(Button)`
  width: 166px;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
  border-radius: 20px !important;
  border: 2px solid var(--borderButton) !important;
  background-color: var(--backgroundButton) !important;
  color: var(--colorButton) !important;
  &:hover {
    background-color: var(--backgroundHoverButton) !important;
  }
`;

export const SelectStyled = styled(NativeSelect)`
  width: 200px;
`;
