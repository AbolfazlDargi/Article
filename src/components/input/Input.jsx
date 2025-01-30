import styled from "./Input.module.css";


function Input(props) { 
  return (
    <div className={styled.inputWrapper}>
      <label>{props.label}</label>
      <input
        image={props.imageUrl}
        name={props.name}
        onChange={props.handleChange}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}
export default Input;
