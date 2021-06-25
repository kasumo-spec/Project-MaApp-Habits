import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import {
  Container,
  FormDiv,
  ImageDiv,
  StyledTextField,
  StyledButton,
} from "./style";
import Image from "../../assets/undraw_Walking_outside_re_56xo.svg";
import { useToken } from "../../hooks/Token";
import { useUser } from "../../hooks/User";
import { toast } from "react-toastify";
import { useHeaderStateProvider } from "../../hooks/HeaderState";

const useStyle = makeStyles({
  text: {
    margin: "35px",
  },
});

const LoginForm = () => {
  const classes = useStyle();
  const history = useHistory();

  const { setUserName } = useUser();
  const { setActualLocation } = useHeaderStateProvider();
  const { setToken, setTokenSucess, tokenSucess } = useToken();

  const schema = yup.object().shape({
    username: yup.string(),
    password: yup.string().min(6, "Mínimo de 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.clear();
        localStorage.setItem("@MaApp:token", JSON.stringify(access));
        setUserName(data.username);
        setToken(access);
        setTokenSucess(true);
        setActualLocation(history.location.pathname);
        reset();
        toast.success("Bem Vindo");
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Erro ao entrar na conta");
      });
  };

  if (tokenSucess) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Container>
      <FormDiv>
        <div className={classes.text}>
          <Typography variant="h3">Login</Typography>
        </div>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <StyledTextField
              required
              variant="outlined"
              label="Nome"
              margin="normal"
              size="small"
              color="primary"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </div>

          <div>
            <StyledTextField
              required
              variant="outlined"
              label="Senha"
              margin="normal"
              size="small"
              color="primary"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <div>
            <StyledButton
              variant="contained"
              color="primary"
              label="Cadastar"
              type="submit"
            >
              Entrar
            </StyledButton>
          </div>
        </form>
      </FormDiv>

      <ImageDiv>
        <img src={Image} alt="login" />
      </ImageDiv>
    </Container>
  );
};

export default LoginForm;
