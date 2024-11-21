import {useState} from "react";
import "./modal.scss";
import { IoCloseOutline } from "react-icons/io5";
import {useDispatch} from "react-redux";
import {addChildToDoItem} from "../../store/slices/updateTodoItem.ts";
import MyButton from "../UI/Button/MyButton.tsx";

type ModalProps = {
  active: boolean;
  setActive: (active: boolean) => void;
  id: number | string,
};

function Modal({ active, setActive, id }: ModalProps) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");





  const  addChildToDo= () => {
    dispatch(addChildToDoItem({value, id}))
    setActive(false)
  }
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className={"modal-close-button"} onClick={() => setActive(false)}>
          <IoCloseOutline />
        </div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          name="input"
          id="input"
          placeholder={"Добавить задачу"}
        />
        <br />
        <MyButton width={"100%"}  onClick={() => addChildToDo()}>
          Добавить
        </MyButton>
      </div>
    </div>
  );
}

export default Modal;
