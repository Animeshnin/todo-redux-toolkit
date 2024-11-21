import "./style.scss";
import { useState } from "react";
import MyButton from "../UI/Button/MyButton.tsx";
import Modal from "../Modal/Modal.tsx";

type TTaskElementProps = {
  taskId: number | string;
};

function TaskElement({ taskId }: TTaskElementProps) {
  const [active, setActive] = useState(false);

  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <details className={"task__element "}>
        <summary
          onClick={() => setActive((prevState) => !prevState)}
          className={`task__summary ${active ? "active" : ""}`}
        >
          <h1>Задача {taskId}</h1>
          <input type="checkbox" checked={active} />
        </summary>
        <MyButton
          onClick={() => setModalActive((prevState) => !prevState)}
          width={"20%"}
        >
          Добавить задачу
        </MyButton>
      </details>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive} id={taskId}/>
      )}
    </>
  );
}

export default TaskElement;
