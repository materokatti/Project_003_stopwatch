import {useState} from "react";
import {FaTimes, FaEdit} from "react-icons/fa";
import styled from "styled-components";
import {TaskBox} from "../styles/GlobalStyle";

interface Props {
  task: any;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, editData: string) => void;
}

const Task: React.FC<Props> = ({task, onDelete, onToggle, onEdit}) => {
  const [editOn, setEditOn] = useState<boolean>(false);
  const [editData, setEditData] = useState<string>(task.text);
  console.log(editData);

  return (
    <TaskChecker checker={task.checker} onDoubleClick={() => onToggle(task.id)}>
      <TaskName>
        <div>
          <TaskText>
            {!editOn && task.text}
            {editOn && (
              <input
                type='text'
                placeholder={editData}
                onChange={(e) => setEditData(e.target.value)}
              />
            )}
            <FaEdit
              onClick={() => {
                if (!editOn) {
                  setEditOn(!editOn);
                } else {
                  onEdit(task.id, editData);
                  setEditOn(!editOn);
                }
              }}
            />
          </TaskText>
        </div>
        <FaTimes
          style={{color: "red", cursor: "pointer"}}
          onClick={() => onDelete(task.id)}
        />
      </TaskName>
      <p>{task.day}</p>
    </TaskChecker>
  );
};

const TaskChecker = styled(TaskBox.withComponent("div"))<{
  checker: boolean;
}>`
  border-left: ${(props) => (props.checker ? "5px solid green" : "null")};
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
