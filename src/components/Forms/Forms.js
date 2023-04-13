import "./Forms.css";
import validUrl from "valid-url";
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
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamColor, setNewTeamColor] = useState("");
  const [team, setTeam] = useState(props.teams[0]);

  // Variáveis de Validacao
  const [isValid, setIsValid] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isValidNewTeam, setIsValidNewTeam] = useState(false);
  const [isSubmitedNewteam, setIsSubmitedNewteam] = useState(false);

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

    setIsValid(fields.every((field) => field !== "") && isUrl(imageLink));
  };

  function validateNewTeamForm() {
    const fields = [newTeamName, newTeamColor];

    setIsValidNewTeam(
      fields.every((field) => {
        return field !== "";
      })
    );
  }

  /**
   * Função que valida o se o campo imageLink é realmente uma url
   *
   * @function isUrl
   * @returns {true | false}
   */
  function isUrl(string) {
    if (validUrl.isUri(string)) {
      return true;
    } else {
      return false;
    }
  }

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

  const clearNewForm = () => {
    setNewTeamName("");
    setNewTeamColor("");
    setIsSubmitedNewteam(true);
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
        <Button
          alertBoxText={"Colaborador criado com sucesso!"}
          alertBootstrapClass={"alert alert-success"}
          disabled={!isValid || isSubmited}
        >
          Criar Colaborador
        </Button>
      </form>

      <form
        className="new-form"
        onSubmit={(event) => {
          event.preventDefault();
          props.registerNewTeam({
            teamName: newTeamName,
            corDeDestaque: newTeamColor,
            corDeFundo: newTeamColor,
          });

          clearNewForm();
          // resetSubmitedForm();
        }}
      >
        <h2>Preencha para criar um novo time</h2>
        <TextField
          mandatory={isMandatory}
          label="Nome"
          placeholder="Digite o nome do time"
          value={newTeamName}
          type={"text"}
          onChanged={(value) => {
            setNewTeamName(value);
            validateNewTeamForm();
          }}
        />
        <TextField
          mandatory={isMandatory}
          label="Cor"
          placeholder="Digite a cor do time"
          value={newTeamColor}
          type={"text"}
          onChanged={(value) => {
            setNewTeamColor(value);
            validateNewTeamForm();
          }}
        />

        <Button
          alertBootstrapClass="alert alert-primary"
          alertBoxText="Novo time criado com sucesso"
          disabled={!isValidNewTeam || isSubmitedNewteam}
        >
          Criar Novo Time
        </Button>
      </form>
    </section>
  );
};

export default Forms;
