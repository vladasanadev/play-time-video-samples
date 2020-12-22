import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { arrayQuizData } from "./api";
import WELCOME_TYPE from "./components/welcome_Type";
import GlobalStyles from "./components/GlobalStyles";
import QUESTION_ONE_TYPE from "./components/QUESTION_ONE_TYPE";
function App() {
  const dispatch = useDispatch();
  const action = {
    type: "GET_DATA",
    arrayQuizData: arrayQuizData,
  };
  useEffect(() => {
    dispatch(action);
  }, [dispatch]);
  // console.log(state);

  return (
    <div className="App">
      <GlobalStyles />
      <QUESTION_ONE_TYPE />
    </div>
  );
}

export default App;
