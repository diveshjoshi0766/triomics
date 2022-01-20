import React from "react";

interface Props {
  task: string;
}

const DraggableArea = ({ task }: Props) => {
    const arr = task.split(" : ");
    return (
        <div className="task">
        <div className="content">
            <span>{arr[0]}</span>
            <span>{arr[1]}</span>
        </div>
        </div>
    );
};

export default DraggableArea;
