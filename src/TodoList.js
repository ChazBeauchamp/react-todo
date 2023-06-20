import * as React from "react";

const todoList = [
  {
    id: 1,
    title: "Read Road to React",
  },
  {
    id: 2,
    title: "Complete Coding Assignment",
  },
  {
    id: 3,
    title: "Submit Pull Request Link",
  },
  {
    id: 4,
    title: "Celebrate",
  },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <li key={item.id}>
            <span>{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
