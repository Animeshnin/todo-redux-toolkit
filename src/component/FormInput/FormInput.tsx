import style from './style.module.scss'
import {useDispatch} from "react-redux";
import {addParentToDoItem, removeParentToDoItem} from "../../store/slices/updateTodoItem.ts";
import MyButton from "../UI/Button/MyButton.tsx";
import React from "react";

function FormInput() {
    const [text, setText] = React.useState<string>('');
    const dispatch = useDispatch()

    const addTask = () => {
        dispatch(addParentToDoItem(text))
    }

    const handleClear = () => {
        dispatch(removeParentToDoItem());
    };

    return (
        <form className={style.form}>

            <ul className={style.form_list}>
                <li className={style.formlist__item}>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={style.form_input}/>
                    <MyButton width={'30%'} onClick={addTask}>Добавить</MyButton>
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