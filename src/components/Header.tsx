import {useLocation} from "react-router-dom";
import styled from "styled-components";
import {Button} from "./Button";

interface Props {
  title: string;
  onAdd: () => any;
  showAdd: boolean;
}

export const Header: React.FC<Props> = ({title, onAdd, showAdd}) => {
  const location = useLocation();

  return (
    <ListHeader>
      <h1>{title}</h1>
      {location.pathname === "/todo" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </ListHeader>
  );
};

const ListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
