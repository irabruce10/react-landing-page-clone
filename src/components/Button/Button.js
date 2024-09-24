import style from './Button.module.scss';
function Button({ children }) {
  return (
    <a href="/">
      <button className={style.button_header}>{children}</button>
    </a>
  );
}

export default Button;
