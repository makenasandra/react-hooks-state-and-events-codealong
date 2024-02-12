import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  const [status, setStatus] = useState({});
  const [count, setCount] = useState(0);

  function handleButtonClick(){
    
      setIsOn(isOn => {return !isOn});
      setStatus(status => {return {...status, "status": isOn}} )
    setCount(count => count + 2)
      // console.log({isOn, })
  }
  console.log({isOn, status, count })
  const color = isOn ? "red" : "white";
  return <button style={{ background: color }} onClick={handleButtonClick}>{isOn? "ON":"OFF"}</button>;
}

export default Toggle;
