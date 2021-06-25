import { GroupContent, GroupInfo } from "../style";

import GroupsModal from "../InfoGroupModal";

const CardGroup = ({ group }) => {
  return (
    <>
      <GroupContent>
        <GroupInfo>
          <h2>{group.name}</h2>

          <p>
            Categoria: <span>{group.category}</span>
          </p>
          <p>
            Descrição: <span>{group.description}</span>
          </p>
        </GroupInfo>
        <GroupsModal group={group} />
      </GroupContent>
    </>
  );
};

export default CardGroup;