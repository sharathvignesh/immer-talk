import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Form = ({ addToDo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    addToDo(inputValue);
    setInputValue("");
  };

  return (
    <Wrapper>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>addToDo</button>
    </Wrapper>
  );
};

export default Form;
