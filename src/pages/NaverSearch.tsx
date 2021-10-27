import styled from "styled-components";
import {Button} from "../components/Button";

export const NaverSearch: React.FC = () => {
  return (
    <ButtonContainer>
      <ButtonFotTest>button</ButtonFotTest>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: relative;

  /* display: flex;
  align-items: center;
  justify-content: center; */
  min-height: 100vh;
`;

const ButtonFotTest = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
`;
