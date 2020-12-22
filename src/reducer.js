const initialState = {
  arrayQuizData: [],
  backGroundImage: "",
  backgroundColor: "",
  backText: "",
  buttonColor: "",
  buttonText: "",
  currentCounter: 0,
  isReady: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        arrayQuizData: action.arrayQuizData,
        isReady: true,
      };
    case "LOAD_NEXT_DATA":
      return {
        ...state,
        backGroundImage:
          state.arrayQuizData[state.currentCounter].backGroundImage,
        backgroundColor:
          state.arrayQuizData[state.currentCounter].backgroundColor,
        backText: state.arrayQuizData[state.currentCounter].backText,
        buttonColor: state.arrayQuizData[state.currentCounter].buttonColor,
        buttonText: state.arrayQuizData[state.currentCounter].buttonText,
      };
    case "UPDATE_COUNTER":
      return {
        ...state,
        currentCounter:
          state.arrayQuizData.length > state.currentCounter
            ? state.currentCounter + 1
            : state.currentCounter,
      };
    default:
      return { ...state };
  }
};

export default mainReducer;
