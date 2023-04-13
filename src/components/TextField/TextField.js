import "./TextField.css";

/**
 * Um componente TextField que exibe uma label e uma entrada de texto.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.label - A label para exibir acima da entrada de texto.
 * @param {string} props.placeholder - O texto de placeholder para exibir na entrada de texto.
 * @param {string} props.value - O valor atual da entrada de texto.
 * @param {boolean} props.mandatory - Indica se a entrada de texto é obrigatória.
 * @param {Function} props.onChanged - Função de callback que é chamada quando o texto na entrada de texto é alterado.
 * @returns {React.Element} Um elemento React que exibe uma label e uma entrada de texto.
 */
const TextField = (props) => {
  /**
   * Função de callback que é chamada quando o texto na entrada de texto é alterado.
   *
   * @param {Object} event - O objeto de evento da entrada de texto.
   */
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
        type={props.type}
        className="form-control"
      />
    </div>
  );
};

export default TextField;
