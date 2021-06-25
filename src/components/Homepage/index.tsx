import {
  Container,
  DivButtons,
  LoginButton,
  RegisterButton,
  Apresentation,
} from "./style";
import logo from "../../assets/horizontal_on_white_by_logaster-_1_.svg";
import { Redirect, useHistory } from "react-router-dom";
import { useToken } from "../../hooks/Token";
import ImagemYoga from "../../assets/undraw_yoga_248n 1.svg";
import { useHeaderStateProvider } from "../../hooks/HeaderState";

const Homepage = () => {
  const { setActualLocation } = useHeaderStateProvider();
  const { tokenSucess } = useToken();

  const history = useHistory();

  if (tokenSucess) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Container>
      <div className={"yoga"}>
        <img src={ImagemYoga} alt="yoga" />
      </div>
      <Apresentation>
        <img src={logo} alt="Ma'App" />
        <p>
          Mapeie seus hábitos com esta ferramenta, reúna-se em grupos, cresça,
          progrida e atinja seus objetivos
        </p>
        <DivButtons>
          <LoginButton
            onClick={() => {
              history.push("/login");
              setActualLocation(history.location.pathname);
            }}
            variant="contained"
          >
            Login
          </LoginButton>
          <RegisterButton
            onClick={() => {
              history.push("/register");
              setActualLocation(history.location.pathname);
            }}
            variant="contained"
          >
            Registre-se
          </RegisterButton>
        </DivButtons>
      </Apresentation>
    </Container>
  );
};

export default Homepage;
