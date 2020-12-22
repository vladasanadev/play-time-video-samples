import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { arrayQuizData } from "./api";
import WELCOME_TYPE from "./components/welcome_Type";
import GlobalStyles from "./components/GlobalStyles";
import QUESTION_ONE_TYPE from "./components/QUESTION_ONE_TYPE";
import { Route, useHistory } from "react-router-dom";
import getNextRoute from "./getNextRoute";
import lastPage from "./components/lastPage";

export const WELCOME_TYPE_PATH = "/WelcomePage";
export const QUESTION_ONE_TYPE_PATH = "/SecondPage";
export const lastPage_PATH = "/LastPage";

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
  const path = getNextRoute();
  const history = useHistory();

  return (
    <div className="App">
      <GlobalStyles />
      <Route exact path={WELCOME_TYPE_PATH} component={WELCOME_TYPE} />

      <Route
        exact
        path={QUESTION_ONE_TYPE_PATH}
        component={QUESTION_ONE_TYPE}
      />
      <Route exact path={lastPage_PATH} component={lastPage} />
    </div>
  );
}

export default App;
