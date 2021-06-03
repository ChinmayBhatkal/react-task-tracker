import Task from "./Task";

function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.length
        ? tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onDelete={() => onDelete(task.id)}
                onToggle={() => onToggle(task.id)}
              />
            );
          })
        : "No Tasks Remaining! Hurray!"}
    </>
  );
}

export default Tasks;
