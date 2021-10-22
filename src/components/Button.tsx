import styled from "styled-components";

interface Props {
  color: string;
  text: string;
  onClick: () => any;
}

export const Button: React.FC<Props> = ({color, text, onClick}) => {
  return (
    <ListButton onClick={onClick} style={{backgroundColor: color}}>
      {text}
    </ListButton>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

const ListButton = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  ::focus {
    outline: none;
  }
  ::active {
    transform: scale(0.98);
  }
`;
