import styles from "./Memo.module.css";
import Header from "../../Components/Header/Header";

const Memo = () => {
  return (
    <>
      <Header />
      <div className={styles["memo-page"]}>
        <h1 className={styles["memo-title"]}>Memo</h1>
        <textarea id="memo" className={styles.memo} onClick={edit}>{localStorage.getItem("memo")}</textarea>
      </div>
    </>
  );
};

export default Memo;

// local storage に変数 memo がなければからの文字列として登録
if(localStorage.getItem('memo') == null) {
  localStorage.setItem('memo', "");
};

// メモを編集するための関数
function edit() {
  document.getElementById("memo").addEventListener('keypress', enter);  // id memo に対して、特定のキーボード操作を可能に
  function enter(e) {
    if (e.keyCode === 13) { // enter が入力された場合
      // local storage の memo をキーとする部分に変更後の内容を追加
      const contents = document.getElementById("memo").value;
      localStorage.setItem('memo', contents);
      return false;
    }  
  }
};
