import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Main: React.FC = () => {
  return (
    <MainUl>
      <div />
      <InterviewList>
        <Link to='/stopwatch'>Stopwatch</Link>
      </InterviewList>
      <InterviewList>
        <Link to='/todo'>Todo List</Link>
      </InterviewList>
      <InterviewList>
        <Link to='/naversearch'>Naver Search</Link>
      </InterviewList>
      <div />
    </MainUl>
  );
};

const MainUl = styled.ul`
  padding: 50px 50px;
  display: grid;
  grid-template-row: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const InterviewList = styled.li`
  text-align: center;
  transition: 0.3s ease all;
  font-size: 2rem;
  :hover {
    transform: scale(2);
  }
`;
