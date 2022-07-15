import React, {useState} from 'react';
import './App.css';
import TodosMemo from './TodosMemo';
// import Todos from './Todos';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((a) => a + 1);
  }

  return (
    <React.Fragment>
      {/* <Todos todoslist={todos} /> */}
      <TodosMemo todolist={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </React.Fragment>
  );
}

export default App;