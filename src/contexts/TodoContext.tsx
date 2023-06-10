import React, { createContext, useState } from 'react';

interface Props {
    children: React.ReactNode
}

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    subtasks: NestedTodo[];
}
  
export interface NestedTodo {
    id: string;
    title: string;
    completed: boolean;
}

interface TodoContextProps {
    todos: Todo[];
    addTodo: (title: string) => void;
    addNestedTodo: (parentId: string, title: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({
    todos: [],
    addTodo: () => {},
    addNestedTodo: () => {},
});

export const TodoProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const addTodo = (title: string) => {
      const newTodo: Todo = {
        id: generateId(),
        title,
        completed: false,
        subtasks: [],
      };
  
      setTodos(prevTodos => [...prevTodos, newTodo]);
    };
  
    const addNestedTodo = (parentId: string, title: string) => {
      const newNestedTodo: NestedTodo = {
        id: generateId(),
        title,
        completed: false,
      };
  
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === parentId
            ? {
                ...todo,
                subtasks: [...todo.subtasks, newNestedTodo],
              }
            : todo
        )
      );
    };
  
    const generateId = (): string => {
      return Math.random().toString(36).substr(2, 9);
    };
  
    return (
      <TodoContext.Provider value={{ todos, addTodo, addNestedTodo }}>
        {children}
      </TodoContext.Provider>
    );
};