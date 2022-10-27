import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./ui/Top";
import Memo from "./ui/Memo";
import Login from "./ui/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/top/`} element={<Top />} />
        <Route path={`/memo/`} element={<Memo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;