import {
  Container,
  Content,
  StyledInput,
  ButtonStyled,
  SelectStyled,
  CloseButton,
} from "./style";
import { useState } from "react";
import { IconButton, InputLabel } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../../services/api";
import { useToken } from "../../../hooks/Token";
import { useGroupsUser } from "../../../hooks/GroupsUser";
import { toast } from "react-toastify";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const PopUpGroups = ({ handleCreateGroup }) => {
  const [category, setCategory] = useState("");

  const { token } = useToken();

  const { getGroupsUser } = useGroupsUser();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        getGroupsUser(token);
        toast.success("Grupo criado com sucesso");
        handleCreateGroup();
      })
      .catch((err) => {
        console.log("deu errado: ", err);
        handleCreateGroup();
        toast.error("Erro ao criar o grupo");
      });
  };

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleForm)}>
        <CloseButton>
          <IconButton onClick={handleCreateGroup}>
            {" "}
            <HighlightOffIcon />
          </IconButton>
        </CloseButton>
        <div>
          <StyledInput
            label="Nome do Grupo"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
        <div>
          <StyledInput
            label="Descrição"
            variant="outlined"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </div>
        <div>
          <InputLabel>Categorias</InputLabel>
          <SelectStyled
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
            {...register("category")}
            error={!!errors.category}
          >
            <option value="" disabled>Selecione</option>
            <option value={"Saúde"}>Saúde</option>
            <option value={"Esporte"}>Esporte</option>
            <option value={"Educação"}>Educação</option>
            <option value={"Leitura"}>Leitura</option>
          </SelectStyled>
        </div>
        <div>
          <ButtonStyled
            variant="contained"
            color="primary"
            label="Cadastar"
            type="submit"
          >
            Criar Grupo
          </ButtonStyled>
        </div>
      </Content>
    </Container>
  );
};

export default PopUpGroups;
