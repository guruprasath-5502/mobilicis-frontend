import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./Task/Tasks";
import Tasktwo from "./Task/Tasktwo";
import Taskthree from "./Task/Taskthree";
import Taskfour from "./Task/Taskfour";
import Taskone from "./Task/Taskone";
import Taskfive from "./Task/Taskfive";



const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tasks set={true}/>}/>
        <Route path="/taskone" element={<Taskone set={true}/>}/>
        <Route path="/tasktwo" element={<Tasktwo set={true}/>}/>
        <Route path="/taskthree" element={<Taskthree set={true}/>}/>
        <Route path="/taskfour" element={<Taskfour set={true}/>}/>
        <Route path="/taskfive" element={<Taskfive set={true}/>}/>
      </Routes>
    </div>
  );
}

export default App;
