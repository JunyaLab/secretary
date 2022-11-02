import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

class Header extends React.Component{
    render() {
        return (
            <div className={styles["header"]}>
                <h1 className={`${styles["header-contents"]} ${styles["title"]}`}>Sirius</h1>
                <div><Link to={`/`} className={styles["header-contents"]}>Login</Link></div>
                <div><Link to={`/memo/`} className={styles["header-contents"]}>Memo</Link></div>
                <div><Link to={`/task/`} className={styles["header-contents"]}>タスク管理</Link></div>
            </div>
        );
    }
};

export default Header;
