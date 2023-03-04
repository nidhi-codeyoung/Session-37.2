import Page1 from "./Components/Page1"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"
import Home from "./Components/Home"

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

//Import the pages


import "./App.css"

function App() {
  return (
    <div>
      <Router>
		<h1>The Latest Technologies and Projects</h1>
	  <div className="list">
          
            <Link to="Home">Home</Link>
            <Link to="page1">AI</Link>
            <Link to="page2">IOT</Link>
            <Link to="page3">Blockchain</Link>
          
        </div>
       
	   <div className="App">
        <Routes>
          <Route exact path="Home" element= {<Home  />} />
          <Route exact path="Page1" element={<Page1 />} />
          <Route exact path="Page2" element={<Page2 />} />
          <Route exact path="Page3" element={<Page3 />} />
        </Routes>
		</div>
        
      </Router>
    </div>
  );
}

export default App;

