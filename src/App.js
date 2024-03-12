import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Registration from "./Pages/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Registration" element={<Registration />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
