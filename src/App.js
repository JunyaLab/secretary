import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./ui/Login/Login";
import Top from "./ui//Top/Top";
import TaskManagement from "./ui/TaskManagement/TaskManagement";
import Memo from "./ui/Memo/Memo";

const App = () => {
  return (
    <BrowserRouter basename='/secretary'>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/top/`} element={<Top />} />
        <Route path={`/memo/`} element={<Memo />} />
        <Route path={`/task/`} element={<TaskManagement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;