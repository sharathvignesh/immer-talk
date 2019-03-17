import React from "react";
import styled, { css } from "styled-components";

const Li = styled("li")`
  ${props =>
    props.completed &&
    css`
      text-decoration: line-through;
    `}
  width: 300px;
`;

const Ul = styled("ul")`
  list-style-type: none;
`;

const TodoList = ({ items, toggleToDo, deleteToDo }) => {
  return (
    <>
      <Ul style={{ listStyleType: "none" }}>
        {items.map(item => (
          <Li key={item.id} completed={item.completed}>
            <input type="checkbox" onClick={() => toggleToDo(item.id)} />
            <span>{item.text}</span>
            <span role="presentation" onClick={() => deleteToDo(item.id)}>
              &times;
            </span>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default TodoList;
