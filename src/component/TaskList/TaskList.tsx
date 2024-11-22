import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import TaskElement from "../TaskElement/TaskElement.tsx";

function TaskList() {
    const tasks = useSelector((state: RootState) => state.addTodoItem.items)
    return (
      <>
        {tasks.map((task  ) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <TaskElement key={task.id} task={task} />
        ))}
      </>
    );
}

export default TaskList;