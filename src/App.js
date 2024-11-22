import { Routes, Route } from "react-router";
import "./App.css";
import Background from "./components/layout/background/Background";
import Header from "./components/layout/header/Header";
import Homepage from "./components/pages/homepage/Homepage";
import Login from "./components/pages/login/Login";
import FindMentors from "./components/pages/find-mentors/FindMentors";

function App() {
  return (
    <div className="App">
      {/* <Background />
      <Header />
      <FAQs /> */}

      <Background />
      <Header />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/find-mentors" element={<FindMentors />} />
      </Routes>
    </div>
  );
}

export default App;
