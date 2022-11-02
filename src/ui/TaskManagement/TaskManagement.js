import { Link } from "react-router-dom";
import styles from "./TaskManagement.module.css";
import Header from "../../Components/Header/Header";

const TaskManagement = () => {
  return (
    <>
      <Header />
      <div className={styles["contents"]}>
        <input className={styles["new-task-name"]} type="text" placeholder="New Task Name" />
        <input className={styles["new-task-limit"]} type="date" />
        <input className={styles["new-task"]} type="radio" />
        <Link className={styles["login-btn"]} to={`/top/`}>Top</Link>
      </div>
    </>
  );
};

export default TaskManagement;

