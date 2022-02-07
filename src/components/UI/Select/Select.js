import style from "./Select.module.css";

function Select(props) {
  return (
    <select
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      className={`${props.className} capitalize input`}
    >
      {props.children}
    </select>
  );
}

export default Select;
