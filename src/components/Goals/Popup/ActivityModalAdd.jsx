import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Paper, Grid } from "@material-ui/core";
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
  if (!values.realization_time) {
    errors.realization_time = "Data necessária";
  }
  return errors;
};

export default function ActivitiesModal({
  id,
  openAddActivity,
  handleCloseAddActivity,
}) {
  const classes = useStyles();
  const { token } = useToken();
  const { getGroupsUser } = useGroupsUser();

  const group = id;
  const realization_time = new Date();

  const addActivity = (values) => {
    console.log(values);
    api
      .post("activities/", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Atividade adicionada!");
        getGroupsUser(token);
      })
      .catch((_) => toast.error("Erro ao adicionar atividade!"));
  };

  const onSubmit = (values) => {
    addActivity(values);
    handleCloseAddActivity();
  };

  return (
    <div className="ModalHabit">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openAddActivity}
        onClose={handleCloseAddActivity}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openAddActivity}>
          <div className={classes.paper}>
            <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
              <h3>Adicionar Atividade</h3>
              <Form
                onSubmit={onSubmit}
                initialValues={{
                  group: group,
                  realization_time: realization_time,
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
