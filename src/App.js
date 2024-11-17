import "./App.css";
import Background from "./components/layout/background/Background";
import Header from "./components/layout/header/Header";
import Homepage from "./components/pages/homepage/Homepage";

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
