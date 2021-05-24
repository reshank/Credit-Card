import React, { useEffect, useRef } from "react";

const PinInput = ({
  data,
  setData,
  isFocused,
  focus,
  setFocus,
  onDataPaste,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      inputRef?.current?.focus();
    }
  }, [isFocused]);

  const onChange = (e) => {
    if (e.target.value > 4) {
      setData(e.target.value.slice(0, 4));
    } else {
      setData(e.target.value);
    }
  };

  const onBackPress = (e) => {
    if (data === "" && e.keyCode === 8) {
      setFocus(focus - 1);
    }
  };

  return (
    
      <input className="header"
      type="number"
      value={data}
      onChange={onChange}
      ref={inputRef}
      onKeyDown={onBackPress}
      onPaste={onDataPaste}
    />
  
  );
};

export default PinInput;