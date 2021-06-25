import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RenderButton from "../Button";
import { useHabit } from "../../hooks/Habits";
import api from "../../services/api";
import { toast } from "react-toastify";
import HabitsModalEdit from "./Popup/HabitsModalEdit";
import { useToken } from "../../hooks/Token";
import { ButtonDiv } from "./style";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    paddingRight: "12px",
    margin: "auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const accordionTheme = createMuiTheme({
  overrides: {
    MuiAccordionDetails: {
      root: {
        display: "block",
      },
    },
  },
});

const Habits = () => {
  const classes = useStyles();
  const { habits, setHabits } = useHabit();
  const { token } = useToken();

  const deleteHabit = (habit) => {
    api
      .delete(`/habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Hábito deletado com sucesso");
        setHabits(habits.filter((hab) => hab.id !== habit.id));
      })
      .catch((_) => toast.error("Erro ao deletar hábito"));
  };

  return (
    <>
      <div className="Dashboard-habits">
        <div className={classes.root}>
          {habits.length !== 0 ?
            habits.map((habit) => {
              return (
                <Accordion key={habit.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${habit.id}a-content`}
                    id={`panel${habit.id}a-header`}
                  >
                    <Typography className={classes.heading}>
                      {habit.title}
                    </Typography>
                  </AccordionSummary>
                  <ThemeProvider theme={accordionTheme}>
                    <AccordionDetails>
                      <Typography>Categoria: {habit.category}</Typography>
                      <Typography>Dificuldade: {habit.difficulty}</Typography>
                      <Typography>Frequência: {habit.frequency}</Typography>
                      <Typography>
                        Conquistado:{" "}
                        {habit.how_much_achieved !== 100
                          ? `${habit.how_much_achieved}%`
                          : "Completado!"}
                      </Typography>
                      <ButtonDiv>
                        <HabitsModalEdit habit={habit} action="editHabit" />{" "}
                        <RenderButton
                          click={() => deleteHabit(habit)}
                          action="deleteHabit"
                        />
                      </ButtonDiv>
                    </AccordionDetails>
                  </ThemeProvider>
                </Accordion>
              );
            }) : (
                <Typography>
                  Você não tem nenhum hábito cadastrado. Clique no botão para cadastrar.
                </Typography>
              ) }
        </div>
      </div>
    </>
  );
};
export default Habits;
