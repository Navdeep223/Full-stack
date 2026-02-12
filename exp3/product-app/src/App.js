import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppExp1 from "./AppExp1";
import Library from "./Library";
import Exp3 from "./Exp3";

function App() {
  return (
    <Router>
      <div style={{textAlign:"center", marginTop:"20px"}}>
        <h1>React Experiments</h1>

        <Link to="/exp1">
          <button>Experiment 3.1</button>
        </Link>

        <Link to="/exp2">
          <button style={{marginLeft:"10px"}}>Experiment 3.2</button>
        </Link>

        <Link to="/exp3">
          <button style={{marginLeft:"10px"}}>Experiment 3.3</button>
        </Link>

        <Routes>
          <Route path="/exp1" element={<AppExp1 />} />
          <Route path="/exp2" element={<Library />} />
          <Route path="/exp3" element={<Exp3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
