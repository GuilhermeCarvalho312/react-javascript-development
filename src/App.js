import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Forms from "./components/Forms/Forms";

/**
 * Um componente App que renderiza o Banner e o Forms.
 *
 * @returns {React.Element} Um elemento React que inclui os componentes Banner e Forms.
 */
function App() {
  const [employees, setEmployees] = useState([]);

  /**
   * Função de callback para adicionar um novo funcionário à lista de funcionários.
   *
   * @param {Object} employee - O objeto contendo os dados do novo funcionário.
   */
  const onNewRegisteredEmployee = (employee) => {
    console.log("onNewRegisteredEmployee", employee);
    setEmployees([...employees, employee]);
    // Essa linha é um exemplo do uso do useState do React. setEmployees é uma função que foi definida usando a função useState e é usada para atualizar o estado da variável employees.

    // O valor atual de employees é o primeiro elemento do array retornado pela função useState, que é inicializado como um array vazio. A nova linha criada a partir de [...employees, employee] é uma forma de atualizar o estado de employees para incluir o novo employee registrado pelo usuário.

    // Essa linha utiliza o operador spread (...) para criar uma cópia do array employees, e em seguida adiciona o employee recém-registrado no final do array. Essa nova matriz atualizada é passada para a função setEmployees, que atualiza o estado de employees com o novo array.

    // Em resumo, essa linha de código adiciona o employee recém-registrado no estado atual de employees e atualiza o estado para incluir o novo employee.
  };

  return (
    <div className="App">
      <Banner />
      <Forms
        onRegisteredEmployees={(employee) => onNewRegisteredEmployee(employee)}
      />
    </div>
  );
}

export default App;
