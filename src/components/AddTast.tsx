import {useState} from "react";
import styled from "styled-components";
import {ListButton} from "../styles/GlobalStyle";

interface Props {
  onAdd: (task: any) => void;
}

const AddTask: React.FC<Props> = ({onAdd}) => {
  const [text, setText] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [reminder, setReminder] = useState<any>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({text, day, reminder});

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <AddForm onSubmit={onSubmit}>
      <FormControl>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <label>Day & Time</label>
        <input
          type='date'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </FormControl>
      <FormControlCheck>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </FormControlCheck>

      <BtnBlock type='submit' value='Save Task' />
    </AddForm>
  );
};

const AddForm = styled.form`
  margin-bottom: 40px;
`;

const FormControl = styled.div`
  margin: 20px 0;
  label {
    display: block;
  }
  input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
`;

const FormControlCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  label {
    flex: 1;
  }
  input {
    flex: 2;
    height: 20px;
  }
`;

const BtnBlock = styled(ListButton.withComponent("input"))`
  display: block;
  width: 100%;
`;

export default AddTask;
