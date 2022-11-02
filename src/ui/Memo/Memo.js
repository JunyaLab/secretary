import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Memo = () => {
  return (
    <>
      <Header />
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