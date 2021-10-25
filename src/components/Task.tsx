import {FaTimes, FaEdit} from "react-icons/fa";
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
        <div>
          <TaskText>
            {task.text}
            <FaEdit onClick={() => console.log("edit")} />
          </TaskText>
        </div>
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

const TaskText = styled.span`
  font-size: 1.3rem;
  color: black;
  svg {
    color: gray;
    font-size: 0.9rem;
    margin-left: 10px;
    cursor: "pointer";
  }
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
