import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import image from "../components/images/welcomeImage.png";
import logo from "../components/images/wunder-logo.png";
import getNextRoute from "../getNextRoute";

const WELCOME_TYPE = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const path = getNextRoute();
  const [isUpdated, setIsUpdated] = useState(false);
  const onClickHandler = () => {
    dispatch({ type: "UPDATE_COUNTER" });
    setIsUpdated(true);
  };
  if (isUpdated) {
    history.push(path);
    setIsUpdated(false);
  }
  console.log(state);

  if (!state.isReady) return <div>Loading...</div>;

  return (
    <MainWrapper>
      <Wrapper
        backgroundImage={
          state.arrayQuizData[state.currentCounter].backGroundImage
        }
      >
        <img src={logo} className="logo"></img>
        <h1>Find out what products you really want and will love </h1>
      </Wrapper>
      <Button onClick={onClickHandler}>START THE QUIZ</Button>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: violet;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  /* display: flex;
    align-items: center; */
  background-image: url(${(props) => props.backgroundImage || "black"});
  /* url(${(props) => props.imageThumb}); */
  /* background-image: url(${image}); */
  color: white;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  h1 {
    padding: 8rem 1rem 5rem 3rem;
  }
  img {
    height: 5%;
    position: fixed;
    top: 0;
    left: 47%;
  }
`;
const Button = styled.div`
  width: 100%;
  height: 15%;
  background-color: #081e71;
  color: #57a7d4;
  text-align: center;
  padding: 12%;
`;

export default WELCOME_TYPE;
