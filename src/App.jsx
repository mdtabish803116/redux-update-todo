import {Home} from "./components/Home";
import {Login} from "./components/Login"
import {Navbar} from "./components/Navbar";
import {Routes , Route} from "react-router-dom";

function App() {
  return (
     <div>
          <Navbar />
         <Routes>
                <Route path = "/" element = {<Home />}></Route>
                <Route path = "/login" element = {<Login />}></Route>
         </Routes>
     </div>
  );
}

export default App;
