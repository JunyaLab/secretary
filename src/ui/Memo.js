import { Link } from "react-router-dom";

const Memo = () => {
  return (
    <>
      <h1>Memo</h1>
      <div>
        <Link to={`/`}>Loginへ</Link>
      </div>
      <div>
        <Link to={`/top/`}>Topへ</Link>
      </div>
    </>
  );
};

export default Memo;