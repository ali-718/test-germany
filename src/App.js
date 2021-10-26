import React, { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isUpdate, setisUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState("");

  const addNewTodo = () => {
    settodos([...todos, inputText]);
    setInputText("");
  };

  const deleteTodo = (val) => {
    settodos(todos.filter((item, i) => i !== val));
  };

  const updateTodo = () => {
    const allTodos = [...todos];

    allTodos[updateIndex] = inputText;

    settodos(allTodos);

    setInputText("");
    setUpdateInInput("");
  };

  const setUpdateInInput = (val, index) => {
    setisUpdate(true);
    setInputText(val);
    setUpdateIndex(index);
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={"enter tod here"}
      />
      <button onClick={isUpdate ? updateTodo : addNewTodo}>Submit</button>

      {todos.map((item, i) => (
        <div key={i}>
          {item}{" "}
          <span onClick={() => deleteTodo(i)} style={{ cursor: "pointer" }}>
            {" "}
            - delete
          </span>
          <span
            onClick={() => setUpdateInInput(item, i)}
            style={{ cursor: "pointer" }}
          >
            {" "}
            - update
          </span>
        </div>
      ))}
    </div>
  );
};

export default App;
