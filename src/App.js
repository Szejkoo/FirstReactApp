import {BrowserRouter as Router} from "react-router-dom";

import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Pages from "./Components/Pages";


function App() {
  return (
   <>
    <Router>
      <Nav/>
      <Pages/>
    </Router>

   </>
  );
}

export default App;
