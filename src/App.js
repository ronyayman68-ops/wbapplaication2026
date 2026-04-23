import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Banner } from './components/NavBar/Banner';
import { Skills } from "./components/skills";
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Subscribe } from "./components/Subscribe";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/project.css'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;