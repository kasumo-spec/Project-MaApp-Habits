import {
  IconButton,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import { ButtonContainer, Content, SaveButton, StyledInput } from "../style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { useToken } from "../../../hooks/Token";
import { useGroupsUser } from "../../../hooks/GroupsUser";
import { toast } from "react-toastify";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineSave } from "react-icons/ai";

const marks = [
  { value: 0, label: "0%" },
  { value: 25, label: "25%" },
  { value: 50, label: "50%" },
  { value: 75, label: "75%" },
  { value: 100, label: "100%" },
];

function valueText(value) {
  return value;
}

const Card = ({ goal }) => {

  const { token } = useToken();

  const { getGroupsUser } = useGroupsUser();

  const [edit, setEdit] = useState(false);

  const [valueSlider, setValeuSlider] = useState()

  const handleSliderChange = (e, newValue) => {
    setValeuSlider(newValue);
  };

  const handleEditForm = () => {
    setEdit(!edit);
  };

  const schema = yup.object().shape({
    title: yup.string(),
    difficulty: yup.string(),
    how_much_achieved: yup.number(),
  });

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formUpdateGoal = (data) => {
    const newObj = {...data, how_much_achieved: valueSlider} 
    api
      .patch(`/goals/${goal.id}/`, newObj, {
        headers: { Authorization: `Bearer ${token}`, },
      })
      .then(() => {
        toast.success("Objetivo atualizado!");
        getGroupsUser(token);
        setEdit(!edit);
        reset();
      })
      .catch(() => {
        setEdit(!edit);
        toast.error("Erro ao atualizar objetivo. Verificar dados");
      });
  };

  return (
    <Content achieved={goal.achieved}>
      <form onSubmit={handleSubmit(formUpdateGoal)}>
        {edit ? (
          <TextField
            variant="filled"
            label="Título"
            margin="normal"
            size="medium"
            defaultValue={goal.title}
            {...register("title")}
          />
        ) : (
          <Typography variant="h2">{goal.title}</Typography>
        )}
        <StyledInput id="difficulty-goal">Dificuldade</StyledInput>
        <Select
          disabled={!edit}
          fullWidth
          name="difficulty"
          id="difficulty-goal"
          defaultValue={goal.difficulty}
          {...register("difficulty")}
        >
          <MenuItem value="Fácil">Fácil</MenuItem>
          <MenuItem value="Médio">Médio</MenuItem>
          <MenuItem value="Difícil">Difícil</MenuItem>
        </Select>

        <StyledInput id="difficulty-slider">Progresso</StyledInput>
        <Slider
          value={valueSlider}
          onChange={handleSliderChange}
          disabled={!edit}
          aria-labelledby="difficulty-slider"
          defaultValue={goal.how_much_achieved}
          getAriaValueText={valueText}
          step={5}
          valueLabelDisplay="auto"
          marks={marks}
        />
        
        <ButtonContainer>
          <SaveButton
            startIcon={<AiOutlineSave />}
            type="submit"
            disabled={!edit}
          />
          <IconButton onClick={handleEditForm} disabled={edit}>
            {" "}
            <BiEditAlt />
          </IconButton>
        </ButtonContainer>
      </form>
    </Content>
  );
};

export default Card;
