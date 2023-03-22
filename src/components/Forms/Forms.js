import "./Forms.css";
import TextField from "../TextField/TextField";
import DropDownList from "../DropDownList/DropDownList";
import Button from "../Button/Button";

/**
 * Um componente de formulário que permite ao usuário inserir dados para criar um card de colaborador.
 *
 * @param {Object} props - As propriedades do componente.
 * @returns {React.Element} Um elemento React que contém um formulário.
 */
const Forms = (props) => {
  const teams = ["Programação", "Frontend", "Data Science", "DevOps"];
  const isMandatory = true;
  const onSave = (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log("Usuário foi submetudo");
  };

  return (
    <section className="forms">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          mandatory={isMandatory}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          mandatory={isMandatory}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          mandatory={isMandatory}
          label="Imagem"
          placeholder="Informe o endereço de imagem"
        />
        <DropDownList mandatory={isMandatory} label="Time" items={teams} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Forms;
