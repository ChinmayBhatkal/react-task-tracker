import { FaTimes } from "react-icons/fa";

function Task({ task, className, onDelete, onToggle }) {
  return (
    <div
      className={className || (task.reminder ? "task reminder" : "task")}
      onDoubleClick={onToggle}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={onDelete}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
