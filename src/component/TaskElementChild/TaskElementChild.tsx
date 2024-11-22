import "./style.scss";
import {useEffect, useRef, useState} from "react";
import MyButton from "../UI/Button/MyButton.tsx";
import Modal from "../Modal/Modal.tsx";
import {getTextToDoItemRedux} from "../../store/slices/updateTodoItem.ts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

export interface Task {
  id: number | string;
  text: string;
  children?: Task[]; // Массив дочерних задач
}

type TTaskElementProps = {
  task: Task;
};

function TaskElementChild({ task }: TTaskElementProps) {
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

  const details = useRef(null);

  const getTextToDoItem = () => {
    const taskText = task.text
    const checkedInput =  !checkedInputRedux
    dispatch(getTextToDoItemRedux({taskText, checkedInput}));
  };


  return (
      <>
        <details ref={details} className={"task__element"}>
          <summary
              onClick={() => setActive((prevState) => !prevState)}
              className={`task__summary ${active ? "active" : ""}`}
          >
            <h1>{task.id} {task.text}</h1>
            <input type="checkbox" onClick={() => getTextToDoItem()} />
          </summary>
          {renderChildComponent &&
              task.children &&
              task.children.map((childTask) => (
                  <TaskElementChild key={childTask.id} task={childTask}/>
              ))}
          <MyButton
              onClick={() => setModalActive((prevState) => !prevState)}
              width={"20%"}
          >
            Добавить задачу
          </MyButton>
        </details>
        {modalActive && (
            <Modal active={modalActive} setActive={setModalActive} id={task.id}/>
        )}

      </>

  );
}

export default TaskElementChild;
