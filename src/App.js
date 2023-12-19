
// import './App.css';

import Nevbar from "./Component/Nevbar";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from "./Component/Home";
import Skill from "./Component/Skill";
import Contect from "./Component/Contect";
import Projects from "./Component/Projects";
import Work from "./Component/Work";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Nevbar />
        <Routes>


          <Route path='/' element={<Home />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
