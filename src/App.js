import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes,Route, HashRouter } from "react-router-dom";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Registration" element={<Registration />} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
