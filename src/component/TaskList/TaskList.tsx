import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import TaskElement from "../TaskElement/TaskElement.tsx";

function TaskList() {
    const tasks = useSelector((state: RootState) => state.addTodoItem.items)
    return (
      <>
        {tasks.map((task) => (
            <TaskElement task={task} />
        ))}
      </>
    );
}

export default TaskList;