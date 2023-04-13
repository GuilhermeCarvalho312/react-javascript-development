import "./Forms.css";
import TextField from "../TextField/TextField";
import DropDownList from "../DropDownList/DropDownList";
import Button from "../Button/Button";
import { useState } from "react";

/**
 * Componente de formulário que permite ao usuário inserir dados para criar um card de colaborador.
 *
 * @param {Object} props - As propriedades passadas para o componente.
 * @param {Function} props.onRegisteredEmployees - A função de callback chamada quando um novo funcionário é registrado.
 * @returns {React.Element} Um elemento React que contém o formulário.
 */
const Forms = (props) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [team, setTeam] = useState(props.teams[0]);
  const [isValid, setIsValid] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const isMandatory = true;

  /**
   * Função de callback que é chamada quando o usuário envia o formulário.
   *
   * @param {Object} event - O objeto de evento do formulário.
   */
  const onSave = (event) => {
    event.preventDefault();
    props.onRegisteredEmployees({ name, office, imageLink, team });
    clearForms();
  };

  /**
   * Função que valida o formulário e atualiza o estado de validação.
   *
   * @function validateForm
   * @returns {void}
   */
  const validateForm = () => {
    const fields = [name, office, imageLink, team];

    setIsValid(fields.every((field) => field !== ""));
  };

  /**
   * Função que limpa os campos do formulário e redefine o valor de time para o valor padrão.
   *
   * @function clearForms
   * @returns {void}
   */
  const clearForms = () => {
    setName("");
    setOffice("");
    setImageLink("");
    setTeam(props.teams[0]);
    setIsSubmited(true);
  };

  return (
    <section className="forms mb-3">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField
          mandatory={isMandatory}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          type={"text"}
          onChanged={(value) => {
            setName(value);
            validateForm();
          }}
        />
        <TextField
          mandatory={isMandatory}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={office}
          type={"text"}
          onChanged={(value) => {
            setOffice(value);
            validateForm();
          }}
        />
        <TextField
          mandatory={isMandatory}
          label="Imagem"
          placeholder="Informe o endereço de imagem"
          value={imageLink}
          type={"url"}
          onChanged={(value) => {
            setImageLink(value);
            validateForm();
          }}
        />
        <DropDownList
          mandatory={isMandatory}
          label="Time"
          itens={props.teams}
          valueDropdown={team}
          onChanged={(value) => {
            setTeam(value);
            validateForm();
          }}
        />
        <Button disabled={!isValid || isSubmited}>Criar Colaborador</Button>
      </form>
    </section>
  );
};

export default Forms;
