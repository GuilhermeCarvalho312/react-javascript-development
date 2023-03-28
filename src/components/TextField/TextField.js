import "./TextField.css";

/**
 * Um componente TextField que exibe uma label e uma entrada de texto.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.label - A label para exibir acima da entrada de texto.
 * @param {string} props.placeholder - O texto de placeholder para exibir na entrada de texto.
 * @returns {React.Element} Um elemento React que exibe uma label e uma entrada de texto.
 */
const TextField = (props) => {
  const onTyped = (event) => {
    props.onChanged(event.target.value);
  };

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTyped}
        required={props.mandatory}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default TextField;
