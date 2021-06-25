import { Container, UserList, ActivityList } from "./style";

const ActivitiesUsers = ({ activities, users_on_group }) => {
  return (
    <Container>
      <UserList>
        <h2>Usuários do Grupo</h2>
        <ul>
          {users_on_group.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </UserList>

      <ActivityList>
        <h2>Atividades do Grupo</h2>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      </ActivityList>
    </Container>
  );
};

export default ActivitiesUsers;
