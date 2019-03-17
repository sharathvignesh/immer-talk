import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: -webkit-center;
`;

const Input = styled("input")`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;

  &:focus {
    outline: none !important;
    border-color: #719ece;
    box-shadow: 0 0 10px #719ece;
  }
`;

const Button = styled("button")`
  background: ${props => (props.primary ? "#607D8B" : "white")};
  color: ${props => (props.primary ? "white" : "#607D8B")};
  outline: none !important;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #607d8b;
  border-radius: 3px;
`;

const Form = ({ addToDo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    addToDo(inputValue);
    setInputValue("");
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="add an item"
      />
      <Button primary onClick={handleSubmit}>
        add todo
      </Button>
    </Wrapper>
  );
};

export default Form;
