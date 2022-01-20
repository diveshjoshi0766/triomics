import React from "react";
import { IPost } from "../Interfaces";

interface Props {
  task: IPost;
  completePost(taskNameToDelete: string): void;
}

const TodoPost = ({ task, completePost }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.name}</span>
        <span>{task.description}</span>
      </div>
      <button
        onClick={() => {
        completePost(task.name);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoPost;
