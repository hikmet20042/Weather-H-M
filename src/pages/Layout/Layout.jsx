import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./css/layout.css";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
