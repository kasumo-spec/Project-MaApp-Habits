import { Button, InputLabel } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: auto;
  padding: 10px;
  position: relative;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
  }
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
  border: ${(props) =>
    props.achieved ? "2px solid #00ff7f" : "2px solid #B2ACFA"};
  form {
    h2 {
      font-size: 1.5rem;
      text-align: left;
      margin-bottom: 10px;
    }
    p {
      line-height: 2rem;
    }
  }
  @media (min-width: 800px) {
    width: 50%;
    max-width: 300px;
    .MuiSlider-root {
      width: 90%;
      margin: 0 auto;
      margin: 13px;
    }
  }
`;

export const StyledInput = styled(InputLabel)`
  position: relative;
  font-size: 1.22rem;
  text-align: left;
  margin-top: 10px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  text-align: center;
  button {
    margin-right: 10px;
  }
`;

export const SaveButton = styled(Button)`
  .MuiSvgIcon-root {
    font-size: 25px;
  }
`;
