import "./App.css";
import Counter from "./Component/Counter";
import Field from "./Component/Field";
import LifeCycle from "./Component/LifeCycle";

function App() {
  return (
    <div className="App">
      <h2>WS_props</h2>
      <Counter />
      <hr />
      <Field />
      <hr />
      <LifeCycle />
    </div>
  );
}

export default App;
