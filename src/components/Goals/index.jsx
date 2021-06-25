import { Typography } from "@material-ui/core";
import { Container } from "./style";
import Card from "./Card";

const Goals = ({ goals }) => {
  return (
    <Container>
      <Typography variant="h1" display="block">
        OBJETIVOS
      </Typography>
      <div>
        {goals.length === 0 ? (
          <p>Não tem nenhum objetivo adicionado neste grupo!</p>
        ) : (
          goals.map((goal) => {
            return <Card key={goal.id} goal={goal} />;
          })
        )}
      </div>
    </Container>
  );
};

export default Goals;
