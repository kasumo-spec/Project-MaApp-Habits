import Groups from "../../components/Groups";
import { Container } from "./style";
import backgroundImg from "../../assets/backgroundGroup.png";

const GroupsPage = () => {
  return (
    <Container>
      <Groups />
      <img src={backgroundImg} alt="backgroudimg" />
    </Container>
  );
};

export default GroupsPage;
