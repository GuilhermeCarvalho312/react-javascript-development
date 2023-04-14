/* eslint-disable no-sparse-arrays */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Banner from "./components/Banner/Banner";
import Forms from "./components/Forms/Forms";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Um componente App que renderiza o Banner e o Forms.
 *
 * @returns {React.Element} Um elemento React que inclui os componentes Banner e Forms.
 */
function App() {
  const [teams, setTeams] = useState([
    {
      isFavorite: false,
      id: "",
      teamName: "Programação",
      corDeDestaque: "#57C278",
      corDeFundo: "#D9F7E9",
    },
    {
      id: "",
      teamName: "Frontend",
      corDeDestaque: "#82CFFA",
      corDeFundo: "#E8F8FF",
    },
    {
      id: "",
      teamName: "Data Science",
      corDeDestaque: "#A6D157",
      corDeFundo: "#F0F8E2",
    },
    {
      id: "",
      teamName: "DevOps",
      corDeDestaque: "#E06B69",
      corDeFundo: "#FDE7E8",
    },
    {
      id: "",
      teamName: "UX e Design",
      corDeDestaque: "#DB6EBF",
      corDeFundo: "#FAE9F5",
    },
    {
      id: "",
      teamName: "Mobile",
      corDeDestaque: "#FFBA05",
      corDeFundo: "#FFF5D9",
    },
    {
      id: "",
      teamName: "Inovação e Gestão",
      corDeDestaque: "#FF8A29",
      corDeFundo: "#FFEEDF",
    },
  ]);

  addIdsToTeams(teams);

  const initialCollaborators = [
    {
      isFavorite: false,
      id: "",
      name: "Lelouch Lamperouge",
      office: "Desenvolvedor Frontend",
      imageLink:
        "https://i.pinimg.com/564x/bb/c3/83/bbc3835a850c69eb780fb3a2d6a417d4.jpg",
      team: teams[0].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Edward Elric",
      office: "Desenvolvedor Full Stack",
      imageLink:
        "https://i.pinimg.com/564x/cc/98/0d/cc980da299aeb43bbee7680c38f56fc4.jpg",
      team: teams[0].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Yoriichi",
      office: "Desenvolvedor Backend",
      imageLink:
        "https://i.pinimg.com/564x/64/af/39/64af394d081295dfa2c4f88df49144cc.jpg",
      team: teams[0].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Naruto Uzumaki",
      office: "Desenvolvedor Frontend",
      imageLink:
        "https://i.pinimg.com/564x/bb/db/13/bbdb137fb4e48ba67a36e0b1f676e7c4.jpg",
      team: teams[1].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Sakura Haruno",
      office: "Designer UX/UI",
      imageLink:
        "https://i.pinimg.com/564x/ef/2a/d3/ef2ad3e0ae3a301fcb72ad2ad935b2dc.jpg",
      team: teams[1].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Ichigo Kurosaki",
      office: "Desenvolvedor Frontend",
      imageLink:
        "https://i.pinimg.com/564x/31/81/f2/3181f2caab61fc845909b8fbb7c5b18a.jpg",
      team: teams[1].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Light Yagami",
      office: "Cientista de Dados",
      imageLink:
        "https://i.pinimg.com/564x/45/74/c1/4574c161d83476ffda9eeb5deb8ffa94.jpg",
      team: teams[2].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Rintarou Okabe",
      office: "Analista de Dados",
      imageLink:
        "https://i.pinimg.com/564x/6e/3a/1f/6e3a1f75f2f2ab2ddd69e1e57a3602c4.jpg",
      team: teams[2].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Kyouma Mabuchi",
      office: "Cientista de Dados",
      imageLink:
        "https://i.pinimg.com/736x/4b/be/53/4bbe53f8fae28d240c335e3d7dd35875.jpg",
      team: teams[2].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Saitama",
      office: "Engenheiro de Sistemas",
      imageLink:
        "https://i.pinimg.com/564x/87/86/73/878673f78c223afdfe76e62b26bb76d1.jpg",
      team: teams[3].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: " Monkey D. Luffy",
      office: "Especialista em Infraestrutura",
      imageLink:
        "https://i.pinimg.com/564x/40/31/00/403100c729d0ef4551aeadfa57d9cbf7.jpg",
      team: teams[3].teamName,
    },

    {
      isFavorite: false,
      id: "",
      name: "Aang",
      office: " Arquiteto de Soluções DevOps",
      imageLink:
        "https://i.pinimg.com/564x/49/aa/89/49aa8990dcd694d52a969f0f3aa779b9.jpg",
      team: teams[3].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Gon Freecss",
      office: "Designer UX/UI",
      imageLink:
        "https://i.pinimg.com/564x/27/d9/29/27d929e997905975a7932aaf546e5592.jpg",
      team: teams[4].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Killua Zoldyck",
      office: "Designer Gráfico",
      imageLink:
        "https://i.pinimg.com/564x/91/94/e0/9194e00ce5361f2fe8c25e21869e7366.jpg",
      team: teams[4].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Neji Hyuga",
      office: " Designer UX/UI",
      imageLink:
        "https://i.pinimg.com/564x/60/de/fd/60defdb7ac90a62ba2727539df42ac81.jpg",
      team: teams[4].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: " Eren Yeager",
      office: "Desenvolvedor Mobile",
      imageLink:
        "https://i.pinimg.com/564x/d5/73/c0/d573c0fccf1fe35c1c8a3533dfa7a3a3.jpg",
      team: teams[5].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Mikasa Ackerman",
      office: "Desenvolvedor Mobile",
      imageLink:
        "https://i.pinimg.com/564x/0a/6a/fa/0a6afac146b0087fbc1a90b3e45094a7.jpg",
      team: teams[5].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Levi Ackerman",
      office: "Desenvolvedor Mobile",
      imageLink:
        "https://i.pinimg.com/564x/fb/13/3e/fb133ee3340e0de2048f92f6c3a54501.jpg",
      team: teams[5].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Vegeta",
      office: "Gerente de Projetos",
      imageLink:
        "https://i.pinimg.com/564x/cf/d2/a8/cfd2a833e9bfa72f4792cd1f86a03452.jpg",
      team: teams[6].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "Goku",
      office: "Especialista em Inovação",
      imageLink:
        "https://i.pinimg.com/564x/61/35/70/61357070494d9aca6883a961340baa44.jpg",
      team: teams[6].teamName,
    },
    {
      isFavorite: false,
      id: "",
      name: "L",
      office: "Analista de Negócios",
      imageLink:
        "https://i.pinimg.com/564x/13/3e/33/133e333eb47e9ffa2bf9242949c4ded8.jpg",
      team: teams[6].teamName,
    },
  ];

  addIdsToCollaborators(initialCollaborators);

  const [collaborators, setCollaborators] = useState(initialCollaborators);

  /**
   * @memberof App
   * @function addIdsToCollaborators
   * @description Função que adiciona um id único para cada colaborador do array InitialCollaborators
   *
   * @param {Array} collaborators - O Array contendo os funcionários
   * @returns {void}
   */
  function addIdsToCollaborators(collaborators) {
    for (const collaborator of collaborators) {
      if (collaborator.id === "") {
        collaborator.id = uuidv4();
      }
    }
  }

  /**
   *  @memberof App
   * @function addIdsToTeams
   * @description Função que adiciona um id único para cada time do array de times
   *
   * @param {Array} collaborators - O Array contendo os times
   * @returns {void}
   */
  function addIdsToTeams(teamsArray) {
    for (let team of teamsArray) {
      team.id = uuidv4();
    }
  }

  /**   * @memberof App
   * @function onNewRegisteredEmployee
   * @description Função de callback para adicionar um novo funcionário à lista de funcionários.
   *
   * @param {Object} employee - O objeto contendo os dados do novo funcionário.
   * @returns {void}
   */
  const onNewRegisteredEmployee = (employee) => {
    const newEmployee = { ...employee, id: uuidv4() };

    setCollaborators([...collaborators, newEmployee]);
  };

  /**
   * @memberof App
   * @function getTeamsNames
   * @description Retorna uma lista de names de equipes.
   *
   * @param {Array} teamsObject - Um array contendo objetos de equipe.s
   * @returns {Array} Uma matriz de names de equipe.
   */
  const getTeamsNames = (teamsObject) => {
    return teamsObject.map((object) => {
      return object.teamName;
    });
  };

  /**
   * @function goDeleteCollaborator
   * @description Deleta o colaborador
   */
  function goDeleteCollaborator(id) {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  }

  /**
   * @memberof App
   * @function changeTeamCollor
   * @description Altera a cor secundária de uma equipe.
   *
   * @param {string} collor - A nova cor secundária da equipe em formato hexadecimal.
   * @param {string} id - O ID da equipe que terá sua cor secundária alterada.
   */
  function changeTeamCollor(collor, id) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.corDeDestaque = collor;
        }

        return team;
      })
    );
  }

  function registerNewTeam(newTeam) {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  }

  function resolveFavorite(collaboratorId) {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === collaboratorId) {
          collaborator.isFavorite = !collaborator.isFavorite;
        }

        return collaborator;
      })
    );
  }

  return (
    <div className="App">
      <Banner />
      <Forms
        registerNewTeam={registerNewTeam}
        teams={getTeamsNames(teams)}
        onRegisteredEmployees={(employee) => onNewRegisteredEmployee(employee)}
      />
      <section>
        {collaborators.length > 0 ? <h1>Minha Organização</h1> : ""}
        {teams.map((team, index) => {
          return (
            <Team
              favoriteTeamComponent
              onFavoriteTeamComponent={resolveFavorite}
              changeCollor={changeTeamCollor}
              key={index}
              name={team.teamName}
              id={team.id}
              corDeDestaque={team.corDeDestaque}
              corDeFundo={team.corDeFundo}
              onDeleteCollaborator={goDeleteCollaborator}
              collaborators={collaborators.filter(
                (personCollaborator, index) => {
                  if (personCollaborator === undefined) {
                    console.error(personCollaborator);
                    console.log(index);
                  }
                  return personCollaborator.team === team.teamName;
                }
              )}
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default App;
