import "./TextField.css";

const TextField = (props) => {
  console.table(props);
  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} type="text" />
    </div>
  );
};

export default TextField;
