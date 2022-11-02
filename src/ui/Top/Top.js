import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Top = () => {
  return (
    <>
      <Header />
      <h1>Top</h1>
      <div>
        <Link to={`/`}>Loginへ</Link>
      </div>
      <div>
        <Link to={`/memo/`}>Memoへ</Link>
      </div>
      <div>
        <Link to={`/task/`}>タスク管理</Link>
      </div>
    </>
  );
};

export default Top;