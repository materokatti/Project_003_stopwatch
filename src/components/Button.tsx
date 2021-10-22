import {ListButton} from "../styles/GlobalStyle";
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
