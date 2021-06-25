import { useState } from "react";
import ActivitiesUsers from "../../ActivitiesUsers";
import Goals from "../../Goals";
import {
  GoalsDiv,
  ActivityDiv,
  ContentModal,
  ContainerModal,
  CloseButton,
  AddButton,
  ButtonContentModal,
  ContentInfoModal,
} from "./style";
import { InfoButton, DeleteButton, StyleButtonDiv } from "../../Groups/style";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import DeleteOutlineTwoToneIcon from "@material-ui/icons/DeleteOutlineTwoTone";
import api from "../../../services/api";
import { useToken } from "../../../hooks/Token";
import { useGroupsUser } from "../../../hooks/GroupsUser";
import { toast } from "react-toastify";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { IconButton } from "@material-ui/core";
import GoalsModal from "../../Goals/Popup/GoalsModalAdd";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ActivitiesModal from "../../Goals/Popup/ActivityModalAdd";

const GroupsModal = ({ group }) => {
  const { token } = useToken();
  const { getGroupsUser } = useGroupsUser();

  const [open, setOpen] = useState(false);
  const [openAddGoal, setOpenAddGoal] = useState(false);
  const [openAddActivity, setOpenAddActivity] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenAddGoal = () => {
    setOpenAddGoal(true);
  };
  const handleCloseAddGoal = () => {
    setOpenAddGoal(false);
  };

  const handleOpenAddActivity = () => {
    setOpenAddActivity(true);
  };
  const handleCloseAddActivity = () => {
    setOpenAddActivity(false);
  };

  const unsubscribeGroup = (id) => {
    api
      .delete(`groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroupsUser(token);
        toast.success("Você não faz mais parte do grupo!");
      })
      .catch((err) => {
        toast.error("Infelizmente não foi possível sair o grupo");
      });
  };

  const body = (
    <ContentModal>
      <CloseButton>
        <IconButton onClick={handleClose}>
          {" "}
          <HighlightOffIcon />
        </IconButton>
      </CloseButton>

      <ButtonContentModal>
        <AddButton
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleOpenAddGoal}
        >
          {" "}
          Adicionar Objetivo
        </AddButton>
        <AddButton
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleOpenAddActivity}
        >
          {" "}
          Adicionar Atividade
        </AddButton>
      </ButtonContentModal>

      <ContentInfoModal>
        <GoalsDiv>
          <Goals goals={group.goals} handleClose={handleClose} />
          <GoalsModal
            id={group.id}
            openAddGoal={openAddGoal}
            handleCloseAddGoal={handleCloseAddGoal}
          />
        </GoalsDiv>

        <ActivityDiv>
          <ActivitiesUsers
            activities={group.activities}
            users_on_group={group.users_on_group}
          />
          <ActivitiesModal
            id={group.id}
            openAddActivity={openAddActivity}
            handleCloseAddActivity={handleCloseAddActivity}
          />
        </ActivityDiv>
      </ContentInfoModal>
    </ContentModal>
  );

  return (
    <>
      <StyleButtonDiv>
        <InfoButton startIcon={<InfoOutlinedIcon />} onClick={handleOpen} />

        <DeleteButton
          startIcon={<DeleteOutlineTwoToneIcon />}
          onClick={() => {
            unsubscribeGroup(group.id);
          }}
        />
      </StyleButtonDiv>

      {open && <ContainerModal>{body}</ContainerModal>}
    </>
  );
};

export default GroupsModal;
