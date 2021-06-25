import { Container, Cards, Pagination } from "./style";
import Card from "../Card";
import { useAllGroups } from "../../hooks/AllGroups";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Button } from "@material-ui/core";

const AllGroup = () => {
  const { allGroups, page, currentPage, handleAdd, handleSub } = useAllGroups();

  return (
    <Container>
      <h1>Grupos</h1>
      <Cards>
        {allGroups.map((group) => (
          <Card key={group.id} group={group} />
        ))}
      </Cards>

      <Pagination>
        {page.previous === null ? (
          <Button
            startIcon={<SkipPreviousIcon />}
            onClick={handleSub}
            disabled
          />
        ) : (
          <Button startIcon={<SkipPreviousIcon />} onClick={handleSub} />
        )}

        <div>{currentPage}</div>

        {page.next === null ? (
          <Button endIcon={<SkipNextIcon />} onClick={handleAdd} disabled />
        ) : (
          <Button endIcon={<SkipNextIcon />} onClick={handleAdd} />
        )}
      </Pagination>
    </Container>
  );
};

export default AllGroup;
