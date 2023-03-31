import "./Button.css";

/**
 * Componente de botão reutilizável para formulários.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - O conteúdo do botão.
 * @param {string} props.url - A URL para verificar se é um link válido.
 * @returns {React.Element} Um elemento React que representa o botão.
 * @example
 * <Button url="https://www.example.com" isValid={true}>Criar card</Button>
 */
const Button = (props) => {
  return <button className="form-button">{props.children}</button>;
};

export default Button;
