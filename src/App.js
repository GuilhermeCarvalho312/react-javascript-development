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
  const [teams, setTeams] = useState([
    {
      teamName: "Programação",
      corDeDestaque: "#57C278",
      corDeFundo: "#D9F7E9",
    },
    {
      teamName: "Frontend",
      corDeDestaque: "#82CFFA",
      corDeFundo: "#E8F8FF",
    },
    {
      teamName: "Data Science",
      corDeDestaque: "#A6D157",
      corDeFundo: "#F0F8E2",
    },
    {
      teamName: "DevOps",
      corDeDestaque: "#E06B69",
      corDeFundo: "#FDE7E8",
    },
    {
      teamName: "UX e Design",
      corDeDestaque: "#DB6EBF",
      corDeFundo: "#FAE9F5",
    },
    {
      teamName: "Mobile",
      corDeDestaque: "#FFBA05",
      corDeFundo: "#FFF5D9",
    },
    {
      teamName: "Inovação e Gestão",
      corDeDestaque: "#FF8A29",
      corDeFundo: "#FFEEDF",
    },
  ]);

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
   * @param {Array} teamsObject - Um array contendo objetos de equipe.s
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

  /**
   * @memberof App
   * @function changeTeamCollor
   * @description Altera a cor secundária de uma equipe.
   *
   * @param {string} collor - A nova cor secundária da equipe em formato hexadecimal.
   * @param {string} name - O nome da equipe que terá sua cor secundária alterada.
   */
  function changeTeamCollor(collor, name) {
    setTeams(
      teams.map((team) => {
        if (team.teamName === name) {
          team.corDeDestaque = collor;
        }

        return team;
      })
    );
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
              changeCollor={changeTeamCollor}
              key={index}
              name={team.teamName}
              corDeDestaque={team.corDeDestaque}
              corDeFundo={team.corDeFundo}
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
