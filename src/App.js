import "./App.css";
import Background from "./components/layout/Background";
import Header from "./components/layout/Header";
import Homepage from "./components/pages/Homepage";

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
