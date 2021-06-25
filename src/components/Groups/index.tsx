import { Typography } from "@material-ui/core";
import { useGroupsUser } from "../../hooks/GroupsUser";
import { ButtonContainer, Container, Content, StyledButton } from "./style";
import Card from "./Card";
import { useState } from "react";
import PopUpGroups from "./PopUp";
import { useHistory } from "react-router-dom";
import {useHeaderStateProvider} from "../../hooks/HeaderState";

const Groups = () => {
  const { groupsUser } = useGroupsUser();
  const [createGroup, setCreateGroup] = useState(false);
  const history = useHistory();
  const {setActualLocation} = useHeaderStateProvider()
  const handleCreateGroup = () => {
    setCreateGroup(!createGroup);
  };

  return (
    <>
      {createGroup && <PopUpGroups handleCreateGroup={handleCreateGroup} />}
      <Container>
        <h1>Grupos</h1>
        <Content>
          {groupsUser.length !== 0 ? (
            groupsUser.map((group) => {
              return <Card key={group.id} group={group} />;
            })
          ) : (
            <Typography variant="h2">
              Você ainda não participa de nenhum grupo. Clique aqui em baixo no
              botão para criar um grupo ou faça parte de um grupo existente.
            </Typography>
          )}
        </Content>
        <ButtonContainer>
          <StyledButton onClick={handleCreateGroup}>Crie um grupo</StyledButton>
          <StyledButton
            onClick={() => {
              history.push("/allgroups");
              setActualLocation("/allgroups")
            }}
          >
            Grupos Existentes
          </StyledButton>
        </ButtonContainer>
      </Container>
    </>
  );
};
export default Groups;
