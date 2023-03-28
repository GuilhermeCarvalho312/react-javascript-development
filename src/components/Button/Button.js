import "./Button.css";

/**
 * Componente de botão reutilizável para formulários.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - O conteúdo do botão.
 * @returns {React.Element} Um elemento React que representa o botão.
 * @example
 * <Button>Criar card</Button>
 */
const Button = (props) => {
  return <button className="form-button">{props.children}</button>;
};

export default Button;
