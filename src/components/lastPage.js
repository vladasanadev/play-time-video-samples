import styled from "styled-components";
import { useSelector } from "react-redux";

const lastPage = () => {
  const state = useSelector((state) => state);
  return (
    <MainWrapper>
      <Wrapper
        backgroundImage={
          state.arrayQuizData[state.currentCounter].backGroundImage
        }
      >
        <h1>Get some playful lipstick just for you</h1>
      </Wrapper>
      <Button>TRY THE QUIZ AGAIN</Button>
      <Button style="background-color:#081E71">GET THE PRODUCT</Button>
    </MainWrapper>
  );
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
    height: 70%;
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
  `;
  const Button = styled.div`
    width: 100%;
    height: 15%;
    background-color: #e74c3c;
    color: #263238;
    text-align: center;
    padding: 12%;
    font-size: 24px;
    font-weight: 700;
    font-family: "Inter";
  `;
};

export default lastPage;
