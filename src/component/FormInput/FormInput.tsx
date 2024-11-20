import style from './style.module.scss'
import  {useState} from "react";

function FormInput() {

    const [input, setInput] = useState<string>('')

    const addTask = () => {

    }

    return (
        <form className={style.form}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className={style.form_input} type="text"
                   placeholder={'Добавить задачу'}/>
            <ul className={style.form_list}>
                <li className={style.formlist__item}>
                    <button type={'button'} title={'Добавить задачу'}
                            onClick={() => {
                                addTask()
                            }}
                            className={style.formlist__item__button}>
                        Добавить
                    </button>
                </li>
                <li className={style.formlist__item}>
                    <button type={'button'}  title={'Очистить'}
                            className={style.formlist__item__button}>Очистить
                    </button>
                </li>
            </ul>
        </form>
    );
}

export default FormInput;