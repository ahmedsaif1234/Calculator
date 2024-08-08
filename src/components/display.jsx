import styles from "./display.module.css";

const display = ({displayValue}) => {
  return (
    <>
      <input className={styles.display} type="text" value={displayValue} readOnly/>
    </>
  )
}

export default display;
