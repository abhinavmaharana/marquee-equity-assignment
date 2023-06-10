import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const TodoList: React.FC = () => {
    const { todos } = useContext(TodoContext);
  
    return (
      <div>
        <h3>Todo List</h3>
        {todos.map(todo => (
          <div key={todo.id}>
            <span>{todo.title}</span>
          </div>
        ))}
      </div>
    );
  };

export default TodoList