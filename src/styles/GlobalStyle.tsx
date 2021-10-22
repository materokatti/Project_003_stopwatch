import styled, {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body{
    font-family: 'Noto Sans KR', sans-serif;
    height: 100%;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  h1 {
      font-size: 2rem;
      font-weight: 600;
  }

  h2 {
      font-size: 1.5rem;
      font-weight: 600;
  }

  span {
    font-weight: bold;
    font-size: 12px;
    color: rgb(112, 112, 112);
  }
  
`;

export const ListButton = styled.button`
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

export const TaskBox = styled.div`
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const TestPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const TestTitle = styled.h2`
  margin: 0.83em 0;
`;

export default GlobalStyle;
