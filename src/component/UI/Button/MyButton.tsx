import style from "../../FormInput/style.module.scss";
import React from "react";

type MyButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  width?: string;
};

function MyButton({ onClick, children, width = '100%' }: MyButtonProps) {
  return (
    <button
      type={"button"}
      className={style.formlist__item__button}
      onClick={onClick}
      style={{ width: `${width}` }}
    >
      {children}
    </button>
  );
}

export default MyButton;
