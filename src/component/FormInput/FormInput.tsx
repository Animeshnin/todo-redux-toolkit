import style from './style.module.scss'
import {useDispatch} from "react-redux";
import {addParentToDoItem, removeParentToDoItem} from "../../store/slices/updateTodoItem.ts";
import MyButton from "../UI/Button/MyButton.tsx";

function FormInput() {
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addParentToDoItem())
    }

    const handleClear = () => {
        dispatch(removeParentToDoItem());
    };

    return (
        <form className={style.form}>
            <ul className={style.form_list}>
                <li className={style.formlist__item}>
                    <MyButton onClick={addTask}>Добавить</MyButton>
                </li>
                <li className={style.formlist__item}>
                    <MyButton  onClick={handleClear}>Очистить
                    </MyButton>
                </li>
            </ul>
        </form>
    );
}

export default FormInput;