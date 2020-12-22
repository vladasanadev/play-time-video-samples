import { useSelector } from "react-redux";
import React from "react";
import welcome_Type from "./components/welcome_Type";
import { WELCOME_TYPE_PATH, QUESTION_ONE_TYPE_PATH } from "./App";

const useNextRoute = () => {
  const { arrayQuizData, currentCounter, isReady } = useSelector(
    (state) => state
  );

  if (isReady) {
    let qt = arrayQuizData[currentCounter].type;
    console.log(qt);
    switch (qt) {
      case "WELCOME_TYPE":
        // return <Welcome/>
        return WELCOME_TYPE_PATH;
      case "QUESTION_ONE_TYPE":
        // return <SecondPage question={quiz[current].question}/>
        return QUESTION_ONE_TYPE_PATH;

      default:
        return "/";
    }
  }
  return "/";
};

export default useNextRoute;
