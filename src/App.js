import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Forms from "./components/Forms/Forms";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

/**
 * Um componente App que renderiza o Banner e o Forms.
 *
 * @returns {React.Element} Um elemento React que inclui os componentes Banner e Forms.
 */
function App() {
  const [employees, setEmployees] = useState([]);
  const teams = [
    {
      teamName: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      teamName: "Frontend",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      teamName: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      teamName: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      teamName: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      teamName: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      teamName: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  /**
   * @memberof App
   * @function onNewRegisteredEmployee
   * @description Função de callback para adicionar um novo funcionário à lista de funcionários.
   *
   * @param {Object} employee - O objeto contendo os dados do novo funcionário.
   * @returns {void}
   */
  const onNewRegisteredEmployee = (employee) => {
    console.log("onNewRegisteredEmployee", employee);
    setEmployees([...employees, employee]);
    // Essa linha é um exemplo do uso do useState do React. setEmployees é uma função que foi definida usando a função useState e é usada para atualizar o estado da variável employees.

    // O valor atual de employees é o primeiro elemento do array retornado pela função useState, que é inicializado como um array vazio. A nova linha criada a partir de [...employees, employee] é uma forma de atualizar o estado de employees para incluir o novo employee registrado pelo usuário.

    // Essa linha utiliza o operador spread (...) para criar uma cópia do array employees, e em seguida adiciona o employee recém-registrado no final do array. Essa nova matriz atualizada é passada para a função setEmployees, que atualiza o estado de employees com o novo array.

    // Em resumo, essa linha de código adiciona o employee recém-registrado no estado atual de employees e atualiza o estado para incluir o novo employee.
  };

  /**
   * @memberof App
   * @function getTeamsNames
   * @description Retorna uma lista de nomes de equipes.
   *
   * @param {Array} teamsObject - Um array contendo objetos de equipe.
   * @returns {Array} Uma matriz de nomes de equipe.
   */
  const getTeamsNames = (teamsObject) => {
    return teamsObject.map((object) => {
      return object.teamName;
    });
  };

  function deleteCollaborator() {
    console.log("deleting collaborator");
  }

  return (
    <div className="App">
      <Banner />
      <Forms
        teams={getTeamsNames(teams)}
        onRegisteredEmployees={(employee) => onNewRegisteredEmployee(employee)}
      />
      <section>
        {employees.length > 0 ? <h1>Minha Organização</h1> : ""}
        {teams.map((team, index) => {
          return (
            <Team
              key={index}
              name={team.teamName}
              primaryColor={team.primaryColor}
              secondaryColor={team.secondaryColor}
              onDeleteCollaborator={deleteCollaborator}
              collaborators={employees.filter((personCollaborator) => {
                return personCollaborator.team === team.teamName;
              })}
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default App;
