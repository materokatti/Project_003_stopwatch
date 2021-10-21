import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Main: React.FC = () => {
  return (
    <MainUl>
      <InterviewList>
        <Link to='/stopwatch'>Stopwatch</Link>
      </InterviewList>
      <InterviewList>
        <Link to='/todo'>Todo List</Link>
      </InterviewList>
      <InterviewList>
        <Link to='/taver'>Naver Searching</Link>
      </InterviewList>
    </MainUl>
  );
};

const MainUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const InterviewList = styled.li`
  text-align: center;
`;
