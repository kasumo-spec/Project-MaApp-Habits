import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 56px);

  img {
    display: none;
  }

  @media (min-width: 900px) {
    height: calc(100vh - 65px);
    img {
      display: block;
      width: 30%;
      margin: 0 0 0 60%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
    }
  }
`;
