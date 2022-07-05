export const loadLogin = (login) => {
  return {
    type: "LOAD_LOGIN",
    payload: login,
  };
};
export const isLoggedIn = (isLogged) => {
  return {
    type: "LOGGED_IN",
    payload: isLogged,
  };
};
export const loadPlanDays = (planDays) => {
  return {
    type: "LOAD_PLAN_DAYS",
    payload: planDays,
  };
};
export const createdPlan = (plan) => {
  return {
    type: "CREATED_PLANS",
    payload: plan,
  };
};
