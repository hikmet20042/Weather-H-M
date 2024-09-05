import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
