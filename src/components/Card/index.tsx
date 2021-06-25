import { Container } from "./style";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import { Button } from "@material-ui/core";
import { useToken } from "../../hooks/Token";
import { useGroupsUser } from "../../hooks/GroupsUser";
import { toast } from "react-toastify";
import api from "../../services/api";

const Card = ({ group }) => {
  const { token } = useToken();
  const { getGroupsUser } = useGroupsUser();

  const subscribeToAGroup = (id) => {
    api
      .post(`groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroupsUser(token);
        toast.success("Bem vindo ao grupo");
      })
      .catch((err) => {
        console.log("deu ruim", err);
        toast.error("Infelizmente não foi possível entrar no grupo");
      });
  };

  return (
    <Container>
      <div className="content">
        <h2>{group.name.length > 13 
          ? `${group.name.substring(0,13)}...`
          : group.name
        }
        </h2>
        <p>{group.description.length > 18 
          ? `${group.description.substring(0,18)}...`
          : group.description
        }
        </p>
        <h3>{group.category.length > 10
          ? `${group.category.substring(0,10)}...`
          : group.category
        }
        </h3>
      </div>
      <div className="btn">
        <Button
          startIcon={<AddCircleSharpIcon />}
          onClick={() => subscribeToAGroup(group.id)}
        />
      </div>
    </Container>
  );
};

export default Card;
