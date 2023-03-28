import "./DropDownList.css";

/**
 * Um componente DropDownList que exibe uma label e um menu suspenso de opções.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.label - A label para exibir acima do menu suspenso.
 * @param {string[]} props.itens - Uma matriz de strings que representam as opções do menu suspenso.
 * @returns {React.Element} Um elemento React que exibe uma label e um menu suspenso de opções.
 */
const DropDownList = (props) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select
        required={props.mandatory}
        value={props.value}
        onChange={(event) => {
          props.onChanged(event.target.value);
        }}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDownList;
