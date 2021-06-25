import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  Paper,
  Grid,
  MenuItem,
} from "@material-ui/core";
import RenderButton from "../../Button";
import { useToken } from "../../../hooks/Token";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useGroupsUser } from "../../../hooks/GroupsUser";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Título Necessário";
  }
  if (!values.difficulty) {
    errors.difficulty = "Dificuldade Necessária";
  }
  return errors;
};

export default function GoalsModal({ id, openAddGoal, handleCloseAddGoal }) {
  const classes = useStyles();
  const { token } = useToken();
  const { getGroupsUser } = useGroupsUser();

  const achieved = false;
  const how_much = 0;
  const group = id;

  const addGoal = (values) => {
    console.log(values);
    api
      .post("/goals/", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Obejtivo criado com sucesso");
        getGroupsUser(token);
      })
      .catch((_) => toast.error("Erro ao criar objetivo!"));
  };

  const onSubmit = (values) => {
    addGoal(values);
    handleCloseAddGoal();
  };

  return (
    <div className="ModalHabit">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openAddGoal}
        onClose={handleCloseAddGoal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAddGoal}>
          <div className={classes.paper}>
            <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
              <h3>Adicionar Objetivo</h3>
              <Form
                onSubmit={onSubmit}
                initialValues={{
                  how_much_achieved: how_much,
                  achieved: achieved,
                  group: group,
                }}
                validate={validate}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <Paper style={{ padding: 16 }}>
                      <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                          <Field
                            name="title"
                            fullWidth
                            required
                            component={TextField}
                            type="string"
                            label="Titúlo"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="difficulty"
                            component={Select}
                            label="Dificuldade"
                            formControlProps={{ fullWidth: true }}
                          >
                            <MenuItem value="Fácil">Fácil</MenuItem>
                            <MenuItem value="Médio">Médio</MenuItem>
                            <MenuItem value="Difícil">Difícil</MenuItem>
                          </Field>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{ marginTop: 16, textAlign: "center" }}
                        >
                          <RenderButton action="confirmButton" />
                        </Grid>
                      </Grid>
                    </Paper>
                  </form>
                )}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
