import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@material-ui/core";
import { useHistory, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackImage from "../../assets/register_img.svg";
import { ImageDiv } from "../LoginForm/style";
import {
  RegisterButton,
  RegisterContainer,
  RegisterFormDiv,
  RegisterTextField,
} from "./style";
import { useToken } from "../../hooks/Token";

const useStyle = makeStyles({
  text: {
    margin: "35px",
  },
});

const RegisterForm = () => {
  const classes = useStyle();
  const history = useHistory();
  const { tokenSucess } = useToken();

  const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email("Email inválido, insira um email válido"),
    password: yup.string().min(6),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/users/", data)
      .then(() => {
        reset();
        toast.success("Usuário cadastrado");
      })
      .then(() => history.push("/login"))
      .catch((err) => {
        if (err.response.status === 400) {
          return toast.error("Usuário já existente");
        }
        toast.error("Erro ao cadastrar");
      });
  };

  if (tokenSucess) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <RegisterContainer>
      <RegisterFormDiv>
        <div className={classes.text}>
          <Typography variant="h3">Registre-se</Typography>
        </div>
        <form onSubmit={handleSubmit(handleForm)}>
          <div>
            <RegisterTextField
              required
              label="Nome de usuário"
              variant="outlined"
              color="primary"
              margin="normal"
              size="small"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </div>

          <div>
            <RegisterTextField
              required
              label="Email"
              variant="outlined"
              color="primary"
              margin="normal"
              size="small"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>

          <div>
            <RegisterTextField
              required
              label="Senha"
              variant="outlined"
              color="primary"
              margin="normal"
              size="small"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>

          <div>
            <RegisterButton
              margin="normal"
              type="submit"
              variant="contained"
              color="primary"
            >
              Registrar
            </RegisterButton>
          </div>
        </form>
      </RegisterFormDiv>
      <ImageDiv>
        <img src={BackImage} alt="register" />
      </ImageDiv>
    </RegisterContainer>
  );
};

export default RegisterForm;
