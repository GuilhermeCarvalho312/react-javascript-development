import Banner from "./components/Banner/Banner";
import Forms from "./components/Forms/Forms";

/**
 * Um componente App que renderiza o Banner e o Forms.
 *
 * @returns {React.Element} Um elemento React que inclui os componentes Banner e Forms.
 */
function App() {
  return (
    <div className="App">
      <Banner />
      <Forms />
    </div>
  );
}

export default App;
