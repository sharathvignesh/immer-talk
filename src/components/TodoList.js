import React from "react";
import styled, { css } from "styled-components";

const Li = styled("li")`
  ${props =>
    props.completed &&
    css`
      text-decoration: line-through;
    `}
  border-bottom: 1px solid #bdbcbc;
  padding-bottom: 10px;
`;

const Ul = styled("ul")`
  list-style-type: none;
  width: 300px;
  margin: 0 auto;
  padding: 0;
  margin-top: 40px;
`;

const TodoList = ({ items, toggleToDo, deleteToDo }) => {
  return (
    <Ul>
      {items.map(item => (
        <Li key={item.id} completed={item.completed}>
          <input type="checkbox" onClick={() => toggleToDo(item.id)} />
          <span>{item.text}</span>
          <span
            role="presentation"
            onClick={() => deleteToDo(item.id)}
            style={{ float: "right" }}
          >
            &times;
          </span>
        </Li>
      ))}
    </Ul>
  );
};

export default TodoList;
