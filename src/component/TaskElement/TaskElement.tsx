import "./style.scss";
import { useEffect, useRef, useState } from "react";
import MyButton from "../UI/Button/MyButton.tsx";
import Modal from "../Modal/Modal.tsx";
import TaskElementChild from "../TaskElementChild/TaskElementChild.tsx";
import { useDispatch, useSelector } from "react-redux";
import { getTextToDoItemRedux } from "../../store/slices/updateTodoItem.ts";
import { RootState } from "../../store/store.ts";
import {IoCloseOutline} from "react-icons/io5";

export interface Task {
  id: number | string;
  text: string;
  children?: Task[]; // Массив дочерних задач
}

type TTaskElementProps = {
  task: Task;
};

function TaskElement({ task }: TTaskElementProps) {
  const receivedText = useSelector(
    (state: RootState) => state.addTodoItem.text,
  );
  const checkedInputRedux = useSelector(
      (state: RootState) => state.addTodoItem.checkedInput,
  );
  const [active, setActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [renderChildComponent, setRenderChildComponent] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (task.children && task.children.length > 0) {
      setRenderChildComponent(true);
    } else {
      setRenderChildComponent(false);
    }
  }, [task]);

  const getTextToDoItem = () => {
    const taskText = task.text
    dispatch(getTextToDoItemRedux({taskText}));
  };

  const details = useRef(null);

  return (
    <section className={"task"}>
      <details ref={details} className={"task__element"}>
        <summary
          onClick={() => setActive((prevState) => !prevState)}
          className={`task__summary ${active ? "active" : ""}`}
        >
          <h1>
            {task.id} {task.text}
          </h1>
          <input type="checkbox" onClick={() => getTextToDoItem()} />
        </summary>
        {renderChildComponent &&
          task.children &&
          task.children.map((childTask) => (
            <TaskElementChild  key={childTask.id} task={childTask} />
          ))}
        <MyButton
          onClick={() => setModalActive((prevState) => !prevState)}
          width={"20%"}
        >
          Добавить задачу
        </MyButton>
      </details>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive} id={task.id} />
      )}
      {checkedInputRedux && <article className={"task__text"}>
        <p>{receivedText}</p>
        <span className={'task-close__button'}><IoCloseOutline /></span>
      </article>}
    </section>
  );
}

export default TaskElement;
