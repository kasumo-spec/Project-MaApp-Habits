import { Redirect } from "react-router-dom";
import Habits from "../../components/Habits";
import Profile from "../../components/Profile";
import { useToken } from "../../hooks/Token";
import { Container, HabitsContainer, ImageContent } from "./style";
import dashImage from "../../assets/undraw_fitness_stats_sht6.svg";
const Dashboard = () => {
  const { tokenSucess } = useToken();

  if (!tokenSucess) {
    return <Redirect to={"/"} />;
  }

  return (
    <>
      <Container>
        <h1>Hábitos</h1>
        <HabitsContainer>
          <Profile />
          <Habits />
        </HabitsContainer>
        <ImageContent>
          <img src={dashImage} alt="dashImage" />
        </ImageContent>
      </Container>
    </>
  );
};

export default Dashboard;
