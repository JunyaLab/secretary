import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles["bg"]}>
      <div className={styles["contents"]}>
        <h1 className={styles["title"]}>Sirius</h1>
        <Link className={styles["login-btn"]} to={`/top/`}>Login</Link>
      </div>
    </div>
  );
};

export default Login;