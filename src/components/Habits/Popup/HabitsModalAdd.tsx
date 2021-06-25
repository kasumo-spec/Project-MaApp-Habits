import React, {useState} from 'react';
import { Form, Field } from 'react-final-form';
import { TextField,  Select } from 'final-form-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Paper, Grid, MenuItem } from '@material-ui/core';
import RenderButton from "../../Button";
import { useToken } from '../../../hooks/Token'
import { useUser } from '../../../hooks/User'
import { toast } from 'react-toastify'
import api from "../../../services/api"
import { useHabit } from '../../../hooks/Habits';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Título Necessário';
  }
  if (!values.category) {
    errors.category = 'Categoria Necessária';
  }
  if (!values.difficulty) {
    errors.difficulty = 'Dificuldade Necessária';
  }
  if (!values.frequency) {
    errors.frequency = 'Frequência Necessária';
  }
  return errors;
};




export default function HabitsModal({action}) {
  const classes = useStyles();
  const { token } = useToken()
  const { userId } = useUser()
  const { habits, setHabits } = useHabit()
  const [ open, setOpen ] = useState(false);

  const achieved = false
  const how_much = 0



  const addHabit = (values) => {
        api
          .post("/habits/", values ,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then((res) => {
            toast.success("Hábito Cadastrado com sucesso")
            setHabits([...habits, res.data])
          })
          .catch((_) => toast.error("Erro ao cadastrar hábito!"))
  }

  const onSubmit =  (values) => {
    addHabit(values)
    handleClose()
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="ModalHabit">
      <RenderButton click={() => handleOpen(action)} action={action}/>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
              <Form
                onSubmit={onSubmit}
                initialValues={{user: userId, how_much_achieved: how_much, achieved: achieved}}
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
                            name="category"
                            required
                            component={Select}
                            label="Categoria"
                            formControlProps={{ fullWidth: true }}
                          >
                            <MenuItem value="Saúde">Saúde</MenuItem>
                            <MenuItem value="Esporte">Esporte</MenuItem>
                            <MenuItem value="Educação">Educação</MenuItem>
                            <MenuItem value="Leitura">Leitura</MenuItem>
                          </Field>
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
                        <Grid item xs={12}>
                          <Field
                            fullWidth
                            name="frequency"
                            component={Select}
                            label="Frequência"
                            formControlProps={{ fullWidth: true }}
                          >
                            <MenuItem value="Diário">Diário</MenuItem>
                            <MenuItem value="Semanal">Semanal</MenuItem>
                            <MenuItem value="Mensal">Mensal</MenuItem>
                          </Field>
                        </Grid>
                        <Grid item xs={12} style={ {marginTop: 16, textAlign: 'center' }}>
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
