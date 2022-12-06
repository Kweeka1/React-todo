import { useEffect, useState } from 'react';
import { Trash } from 'react-bootstrap-icons';
import './todo.css';

const Todo = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo_react')) || {});

  const addTodoItem = (e) => {
    const description = e.target.value;
    if (description && e.key === 'Enter') {
      setTodos({
        ...todos,
        [Math.random().toString(36).replace('0.', '')]: {
          description,
          isCompleted: false,
        },
      });

      e.target.value = '';
    }
  };

  const removeTodo = (id) => {
    setTodos(() => {
      delete todos[id];
      return { ...todos };
    });
  };

  const updateTodoDescription = (description, id) => {
    setTodos({
      ...todos,
      [id]: {
        ...todos[id],
        description,
      },
    });
  };

  const updateTodoStatus = (isCompleted, id) => {
    setTodos({
      ...todos,
      [id]: {
        ...todos[id],
        isCompleted: !isCompleted,
      },
    });
  };

  useEffect(() => {
    localStorage.setItem('todo_react', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo">
      <h1 className="todo-title">Todos</h1>
      <div className="todo-form">
        <input
          className="todo-add-field"
          onKeyDown={(e) => addTodoItem(e)}
          type="text"
          placeholder="Add todo"
          required
        />
      </div>
      <div className="todo-items">
        {
          Object.keys(todos).length
            ? Object.entries(todos).map(([id, todo]) => (
              <div id={id} className="todo-item" key={id}>
                <input
                  className="todo-checkbox"
                  onChange={() => updateTodoStatus(todo.isCompleted, id)}
                  type="checkbox"
                  defaultChecked={todo.isCompleted}
                />
                <input
                  className={`${todo.isCompleted && 'line-through'}`}
                  onChange={(e) => updateTodoDescription(e.target.value, id)}
                  value={todo.description}
                />
                <Trash className="todo-remove-btn" size={34} onClick={() => removeTodo(id)} />
              </div>
            ))
            : (
              <div>
                <p>Todo list is currently empty</p>
              </div>
            )
        }
      </div>
    </div>
  );
};

export default Todo;
