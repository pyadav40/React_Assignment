import { Routes, Route} from "react-router-dom";
 
import LoginPage from "./Component/LoginPage/LoginPage";
import Comp1 from "./Component/Components/Comp1";
import Comp2 from "./Component/Components/Comp2";
 
function App() {
  return (
  
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/comp1' element={<Comp1/>}/>
    <Route path='/comp2' element={<Comp2/>}/>
 
    </Routes>
 
 
 
  );
}

export default App;
