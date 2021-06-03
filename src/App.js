import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

// const tasks = [
//   {
//     id: 1,
//     text: "task 1",
//     day: "01-01-01",
//     reminder: false,
//   },
//   {
//     id: 2,
//     text: "task 2",
//     day: "01-01-01",
//     reminder: true,
//   },
//   {
//     id: 3,
//     text: "task 3",
//     day: "01-01-01",
//     reminder: true,
//   },
//   {
//     id: 4,
//     text: "task 4",
//     day: "01-01-01",
//     reminder: false,
//   },
// ]

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  function toggleAddTask() {
    setShowAddTask(!showAddTask);
  }

  function toggleReminder(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  function addTask(task) {
    console.log(task);
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App container">
      <Router>
        <Header onAddClick={toggleAddTask} showAdd={!showAddTask} />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />
            </>
          )}
        />
        <Route path="/about" exact component={About} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
