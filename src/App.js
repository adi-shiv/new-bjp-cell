import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes,Route, HashRouter } from "react-router-dom";
// import Registration from "./Pages/Registration";
// import { Modal } from "react-bootstrap";
// import Modal from './Components/Modal';
import CertificateGenerator from "./Pages/CertificateGenerator";

function App() {
  return (
    <div>
      <HashRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/CertificateGenerator" element={<CertificateGenerator />} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
