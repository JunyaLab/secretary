import { Link } from "react-router-dom";
import styles from "./TaskManagement.module.css";

const TaskManagement = () => {
  return (
    <>
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

