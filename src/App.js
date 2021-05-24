import React, { useEffect, useState } from "react";
import PinInput from "./components/PinInput";
 import './App.css';

const App = () => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const [focus, setFocus] = useState(0);

  useEffect(() => {
    if (pin1.length === 4) {
      setFocus(1);
    }

    if (pin2.length === 4) {
      setFocus(2);
    }

    if (pin3.length === 4) {
      setFocus(3);
    }
  }, [pin1, pin2, pin3]);

  const onDataPaste = (e) => {
    e.preventDefault();
    let pastedData = e.clipboardData.getData("Text");
    setPin1(pastedData.slice(0, 4));
    setPin2(pastedData.slice(4, 8));
    setPin3(pastedData.slice(8, 12));
    setPin4(pastedData.slice(12, 16));
  };

  return (
    <div>
      <label className="main">credit card*</label>
      <PinInput
        isFocused={focus === 0}
        data={pin1}
        setData={setPin1}
        focus={focus}
        setFocus={setFocus}
        onDataPaste={onDataPaste}
      />
      <PinInput
        isFocused={focus === 1}
        data={pin2}
        setData={setPin2}
        focus={focus}
        setFocus={setFocus}
        onDataPaste={onDataPaste}
      />
      <PinInput
        isFocused={focus === 2}
        data={pin3}
        setData={setPin3}
        focus={focus}
        setFocus={setFocus}
        onDataPaste={onDataPaste}
      />
      <PinInput
        isFocused={focus === 3}
        data={pin4}
        setData={setPin4}
        focus={focus}
        setFocus={setFocus}
        onDataPaste={onDataPaste}
      />

      <br />
      <br />
    
      <button className="button" 
        onClick={() => alert(pin1 + "-" + pin2 + "-" + pin3 + "-" + pin4)}
      >
        Submit Button
      </button>
      </div>
      
    
  );
};

export default App;


