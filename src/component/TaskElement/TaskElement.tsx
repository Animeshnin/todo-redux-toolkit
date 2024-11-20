import  './style.scss'
import {useState} from "react";

type TTaskElementProps = {
    taskId: number,
    taskText: string,
}

function  TaskElement({taskId, taskText} : TTaskElementProps) {
    const [active, setActive] = useState(false)

    return (
      <details className={"task__element "}>
        <summary onClick={() => setActive(prevState => !prevState)} className={`task__summary ${active ? 'active' : ''}`}>
          <h1>{taskId}</h1>
          <input type="checkbox" checked={false} />
        </summary>
          {taskText}
      </details>
    );
}

export default TaskElement;