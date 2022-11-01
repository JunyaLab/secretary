import { Link } from "react-router-dom";

const Top = () => {
  return (
    <>
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