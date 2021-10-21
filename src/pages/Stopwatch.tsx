import React, {useEffect, useState} from "react";
import styled from "styled-components";

export const Stopwatch: React.FC = () => {
  const [duration, setDuration] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [stopwatchOn, setStopwatchOn] = useState<boolean>(false);
  const minOnWatch = Math.floor(duration / 60000);

  useEffect(() => {
    let timerInterval = setInterval(() => {
      setSecond((prev) => (prev === 0 ? 59 : prev - 1));
      setDuration((prev) => prev - 1000);
    }, 1000);
    if (!stopwatchOn) {
      setDuration(Number(prompt("분을 입력해주세요.")) * 60 * 1000);
      setSecond(0);
    } else if (stopwatchOn) {
      clearInterval(timerInterval);
      setDuration(0);
      setSecond(0);
      timerInterval = setInterval(() => {
        setSecond((prev) => (prev === 59 ? 0 : prev + 1));
        setDuration((prev) => prev + 1000);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [stopwatchOn]);

  console.log("duration:", duration, second);
  console.log(stopwatchOn);

  return (
    <>
      <StopwatchBox>
        <svg viewBox='0 0 100 100' style={{display: "block", width: "350px"}}>
          <path
            d='M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90'
            stroke='rgba(0,0,0,0.8)'
            stroke-width='10'
            fill-opacity='0'
          ></path>
          <path
            d='M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90'
            stroke='rgba(255,0,0,1)'
            stroke-width='10'
            fill-opacity='0'
          ></path>
        </svg>
        <Counting>
          {minOnWatch < 10 ? `0${minOnWatch}` : minOnWatch}:
          {second < 10 ? `0${second}` : second}
        </Counting>
        <ChangeModeBtn
          onClick={() => {
            setStopwatchOn((prev) => !prev);
          }}
          stopwatchOn={stopwatchOn}
        >
          {stopwatchOn ? "Timer" : "Stopwatch"}
        </ChangeModeBtn>
      </StopwatchBox>
    </>
  );
};

const StopwatchBox = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`;

const Counting = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgba(255, 0, 0, 1);
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const ChangeModeBtn = styled("button")<{stopwatchOn: boolean}>`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2px 10px;
  background-color: ${(props) => (props.stopwatchOn ? "white" : "gray")};
  color: ${(props) => (props.stopwatchOn ? "gray" : "white")};
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s ease all;
`;
