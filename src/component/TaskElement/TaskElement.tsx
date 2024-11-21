import "./style.scss";
import { useEffect, useState } from "react";
import MyButton from "../UI/Button/MyButton.tsx";
import Modal from "../Modal/Modal.tsx";

export interface Task {
  id: number | string;
  text: string;
  children?: Task[]; // Массив дочерних задач
}

type TTaskElementProps = {
  task: Task;
};

function TaskElement({ task }: TTaskElementProps) {
  const [active, setActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [renderChildComponent, setRenderChildComponent] = useState(false);
  useEffect(() => {
    if (task.children && task.children.length > 0) {
      setRenderChildComponent(true);
    } else {
      setRenderChildComponent(false);
    }
  }, [task]); // Зависимость от task
  return (
    <section className={'task'}>
      <details className={"task__element"}>
        <summary
          onClick={() => setActive((prevState) => !prevState)}
          className={`task__summary ${active ? "active" : ""}`}
        >
          <h1>{task.id} {task.text}</h1>
          <input type="checkbox" checked={active} />
        </summary>
        {renderChildComponent &&
          task.children &&
          // Рендерим дочерние задачи
          task.children.map((childTask) => (
            <TaskElement key={childTask.id} task={childTask} />
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
      <article className={'task__text'}>
        Текст
      </article>
    </section>
  );
}

export default TaskElement;
