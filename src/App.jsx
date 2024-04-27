import "./App.css";
import { FooterApp } from "./components/Footer/footer";
import NavBar from "./components/Navigation/navBar";
import SectionBody from "./components/sections/sectionBody";

function App() {
  return (
    <>
      <div className="font-inter">
        <NavBar />
        <SectionBody />
        <FooterApp />
      </div>
    </>
  );
}

export default App;
