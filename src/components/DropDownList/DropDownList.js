import "./DropDownList.css";

const DropDownList = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <select></select>
    </div>
  );
};

export default DropDownList;
