import actionTypes from "./ActionTypes";

export const getEmployee = (data) => ({
  type: actionTypes.GET_EMPLOYEE_REQUEST,
  data,
});

export const updateEmployees = (data) => ({
  type: actionTypes.EDIT_EMPLOYEE_REQUEST,
  data,
});
