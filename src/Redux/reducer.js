const initialState = {
  login: [],
  planDays: [],
  loggedIn: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: action.payload,
      };
    case "LOAD_PLAN_DAYS":
      return {
        ...state,
        planDays: action.payload,
      };
    case "CREATED_PLANS":
      const newCreatedPlans = [...state.planDays, action.payload];
      return {
        ...state,
        planDays: newCreatedPlans,
      };
    default:
      return state;
  }
};

export default reducer;
