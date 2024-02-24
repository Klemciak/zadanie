import "../style/App.scss";
import Form from "./form.js";
import ListContainer from "./ListContainer.js";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Form />
        <ListContainer />
      </div>
    </div>
  );
}

export default App;
