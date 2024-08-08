import styles from "./App.module.css";
import Display from "./components/display";
import ButtonContainer from "./components/buttonContainer";
import { useState } from "react";

const App = () => {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
     setCalVal("");
    } else if (buttonText === "=") {
       const result = eval(calVal);
       setCalVal(result);
    } else {
        
      const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);
       }
    };
    
  

  return (

    <center>
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick = {onButtonClick} ></ButtonContainer>
      
    </div>
    </center>
  );
}
export default App

