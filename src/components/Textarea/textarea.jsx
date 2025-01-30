import style from "./Textarea.module.css";

function Textarea(props) {
  return (
    <div className={style.textareaWrapper}>
      <label>{props.label}</label>
      <textarea onChange={props.handleChange}></textarea>
    </div>
  );
}

export default Textarea;
