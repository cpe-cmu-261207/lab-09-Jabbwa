import { useEffect, useState } from "react";
import Todolist from "../components/Todolist";
import { ThemeContext } from "../context/ThemeContext";
import { themes } from "../libs/themes";
import { IconSunHigh, IconMoon } from "@tabler/icons";
import MainLayout from "../layouts/MainLayout";
// import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState([]);

  const [theme, setTheme] = useState(themes.light);
  const [selTheme, setSelTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (selTheme.name === "light") setSelTheme(themes.dark);
    else setSelTheme(themes.light);
  };

  const setLightTheme = () => setSelTheme(themes.light);

  const setDarkTheme = () => setSelTheme(themes.dark);

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx - 1].title;
    todos[idx].completed = todos[idx - 1].completed;

    todos[idx - 1].title = title;
    todos[idx - 1].completed = completed;
    setTodos([...todos]);
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) return;
    const title = todos[idx].title;
    const completed = todos[idx].completed;

    todos[idx].title = todos[idx + 1].title;
    todos[idx].completed = todos[idx + 1].completed;

    todos[idx + 1].title = title;
    todos[idx + 1].completed = completed;
    setTodos([...todos]);
  };

  const onKeyUpHandler = (e) => {
    if (e.key !== "Enter") return;
    // const newTodos = [todoInput, ...todos];
    // alert("Hello world");
    const newTodos = [{ title: todoInput, completed: false }, ...todos];
    setTodos(newTodos);
    setTodoInput("");
  };

  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("todo-react", todosStr);
  }, [todos]);

  useEffect(() => {
    const todoStr = localStorage.getItem("todo-react");
    if (todoStr === null) {
      setTodos([]);
    } else {
      setTodos(JSON.parse(todoStr));
    }
  }, []);

  return (
    <MainLayout>
      <div style={{ backgroundColor: selTheme.background }}>
        {/* Entire App container (required for centering) */}
        <div
          style={{
            maxWidth: "700px",
          }}
          className="mx-auto"
        >
          {/* App header */}
          <p
            className="display-4 text-center fst-italic"
            style={{ color: selTheme.foreground }}
          >
            Minimal Todo List <span className="fst-normal">☑️</span>
          </p>
          {/* Input */}
          <div className="d-flex align-items-center gap-2">
            <input
              className="form-control mb-1 fs-4"
              placeholder="insert todo here..."
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              value={todoInput}
              onKeyUp={onKeyUpHandler}
            />
            <button className="btn btn-dark" onClick={toggleTheme}>
              {/* {selTheme.name === "light" ? <IconSunHigh /> : <IconMoon />} */}
              {theme.name === "light" && <IconSunHigh />}
              {theme.name === "dark" && <IconMoon />}
            </button>
          </div>

          <div style={{ color: selTheme.foreground }}>
            {todos.map((todo, i) => (
              <Todolist
                //10. update prop sending
                title={todo.title}
                key={i}
                //12. update prop sending
                completed={todo.completed}
                //3. add callback
                onDelete={() => {
                  deleteTodo(i);
                }}
                //11. add mark callback
                onMark={() => {
                  markTodo(i);
                }}
                onUp={() => {
                  moveUp(i);
                }}
                onDown={() => {
                  moveDown(i);
                }}
              />
            ))}
          </div>

          {/* summary section */}
          <p className="text-center fs-4">
            <span className="text-primary">All ({todos.length}) </span>
            <span className="text-warning">
              Pending ({todos.filter((x) => x.completed === false).length})
            </span>
            <span className="text-success">
              Completed ({todos.filter((x) => x.completed === true).length})
            </span>
          </p>

          {/* Made by section */}
          <p className="text-center mt-3 text-muted fst-italic">
            made by Sopida Kiti 630610658
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
