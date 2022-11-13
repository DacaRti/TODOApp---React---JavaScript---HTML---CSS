import Button from "../ui/Button";
import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri";

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <>
      <Button onClick={resetTodos} title="Reset Todos">
        <RiRefreshLine></RiRefreshLine>
      </Button>
      <Button
        disabled={completedTodosExist}
        onClick={deleteCompletedTodos}
        title="Clear Completed Todos"
      >
        <RiDeleteBin2Line></RiDeleteBin2Line>
      </Button>
    </>
  );
}

export default TodosActions;
