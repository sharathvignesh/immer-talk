import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    alert(inputValue);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <input type="submit" value="Add todo" />
      </form>
    </Wrapper>
  );
};

export default Form;
