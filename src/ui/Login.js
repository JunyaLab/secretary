import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <div>
        <Link to={`/top/`}>Topへ</Link>
      </div>
    </>
  );
};

export default Login;