import { Link } from "react-router-dom";
import styles from "./TaskManagement.module.css";

const TaskManagement = () => {
  return (
    <div className={styles["bg"]}>
      <div className={styles["contents"]}>
        <input className={styles["new-task-name"]} type="text" placeholder="New Task Name" />
        <Link className={styles["login-btn"]} to={`/top/`}>Top</Link>
      </div>
    </div>
  );
};

export default TaskManagement;







