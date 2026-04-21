import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Banner } from './components/NavBar/Banner';
import { Skills } from "./components/skills";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;