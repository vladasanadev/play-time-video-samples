import styled from "styled-components";
import { useSelector } from "react-redux";

const QUESTION_ONE_TYPE = () => {
  const state = useSelector((state) => state);
  if (!state.isReady) return <div>Loading...</div>;
  return (
    <Wrapper>
      <Question>How do you like to have your ice-cream? </Question>
      <Picture
        backgroundImage={
          state.arrayQuizData[state.currentCounter].backGroundImage1
        }
      ></Picture>
      <Picture
        backgroundImage={
          state.arrayQuizData[state.currentCounter].backGroundImage2
        }
      ></Picture>
      <Button>SEND ANSWER</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: violet;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Question = styled.div`
  width: 100%;
  height: 25%;
  background-color: #57a7d4;
  color: white;
  text-align: center;
  padding: 14%;
  font-size: 30px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
`;

const Picture = styled.div`
  width: 100%;
  height: 30%;
  background-image: url(${(props) => props.backgroundImage || "black"});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    border: 8px solid #ff5e18;
    overflow: hidden;
    /* margin: -5px; */
  }
`;

const Button = styled.div`
  width: 100%;
  height: 15%;
  background-color: #ff5e18;
  color: white;
  text-align: center;
  padding: 12%;
  font-size: 24px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;

export default QUESTION_ONE_TYPE;
