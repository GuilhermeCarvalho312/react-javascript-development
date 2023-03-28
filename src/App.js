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
