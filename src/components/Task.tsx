import {FaTimes} from "react-icons/fa";
import styled from "styled-components";
import {TaskBox} from "../styles/GlobalStyle";

interface Props {
  task: any;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const Task: React.FC<Props> = ({task, onDelete, onToggle}) => {
  return (
    <TaskReminder
      reminder={task.reminder}
      onDoubleClick={() => onToggle(task.id)}
    >
      <TaskName>
        {task.text}{" "}
        <FaTimes
          style={{color: "red", cursor: "pointer"}}
          onClick={() => onDelete(task.id)}
        />
      </TaskName>
      <p>{task.day}</p>
    </TaskReminder>
  );
};

const TaskReminder = styled(TaskBox.withComponent("div"))<{
  reminder: boolean;
}>`
  border-left: ${(props) => (props.reminder ? "5px solid green" : "null")};
`;

const TaskName = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
`;

export default Task;
