import React from 'react';
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import CreateIcon from '@material-ui/icons/Create';

const MappButton = withStyles((theme) => ({
  root: {
    width: "180px",
    height: "50px",
    color: "#6B6AF5",
    fontSize: "14px",
    background: "#FFFFFF",
    mixBlendMode: "normal",
    border: "2px solid #6B6AF5",
    boxSizing: "border-box",
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#C4D7D1",
      borderColor: "#0062cc",
      color: "#6B6AF5",
      boxShadow: "none"
    }
  }
}))(Button);

const MappButtonIcon = withStyles((theme) => ({
  root: {
    color: "#6B6AF5",
    fontSize: "36px",
    background: "#FFFFFF",
    mixBlendMode: "normal",
    border: "2px solid #6B6AF5",
    boxSizing: "border-box",
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: "#C4D7D1",
      borderColor: "#0062cc",
      color: "#6B6AF5",
      boxShadow: "none"
    }
  }
}))(Button);

const RenderButton = ({action, click}) => {
  if (action === 'addHabitPopup') {
    return (
      <MappButton onClick={click} variant="contained">
        Adicionar Hábito
      </MappButton>
    )
  }
  if (action === "confirmButton") {
    return (
      <MappButton type="submit"  variant="contained">
        Confirmar
      </MappButton>
    )
  }
  if (action === "editHabit") {
    return (
      <MappButtonIcon onClick={click} variant="contained">
        <CreateIcon />
      </MappButtonIcon>
    )
  }
  if (action === "deleteHabit") {
    return (
      <MappButtonIcon onClick={click} variant="contained">
        <DeleteIcon />
      </MappButtonIcon>
    )
  }
}

export default RenderButton
