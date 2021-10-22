import Task from "./Task";

interface Props {
  tasks: any[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Tasks: React.FC<Props> = ({tasks, onDelete, onToggle}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
