import Main from "./pages/Main/Main";
import NavBar from "./pages/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Footer from "./pages/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
