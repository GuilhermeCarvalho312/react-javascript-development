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
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("Programação");

  const teams = ["Programação", "Frontend", "Data Science", "DevOps"];
  const isMandatory = true;

  /**
   * Função de callback que é chamada quando o usuário envia o formulário.
   *
   * @param {Object} event - O objeto de evento do formulário.
   */
  const onSave = (event) => {
    event.preventDefault();
    props.onRegisteredEmployees({ name, office, image, team });
  };

  return (
    <section className="forms">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField
          mandatory={isMandatory}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChanged={(value) => {
            setName(value);
          }}
        />
        <TextField
          mandatory={isMandatory}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={office}
          onChanged={(value) => {
            setOffice(value);
          }}
        />
        <TextField
          mandatory={isMandatory}
          label="Imagem"
          placeholder="Informe o endereço de imagem"
          value={image}
          onChanged={(value) => {
            setImage(value);
          }}
        />
        <DropDownList
          mandatory={isMandatory}
          label="Time"
          itens={teams}
          value={team}
          onChanged={(value) => {
            setTeam(value);
          }}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Forms;
