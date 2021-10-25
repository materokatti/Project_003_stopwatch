import Task from "./Task";

interface Props {
  tasks: any[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, editData: string) => void;
}

const Tasks: React.FC<Props> = ({tasks, onDelete, onToggle, onEdit}) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

export default Tasks;
