import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./COMPONENTS/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CSS/Header.css"
import "./CSS/FirstPage.css"
import "./CSS/Footer.css"
import "./CSS/AboutMe.css"
import "./CSS/Education.css"
import "./CSS/Experience.css"
import "./CSS/Achivements.css"
import "./CSS/Certification.css"
import "./CSS/Projects.css"
import "./CSS/Skills.css"
import "./CSS/Resume.css"


import Home from "./PAGES/Home";
import Projects from "./COMPONENTS/Projects";
import Skills from "./COMPONENTS/Skills";
import Resume from "./COMPONENTS/Resume";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;
