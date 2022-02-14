import actionTypes from "../action/ActionTypes";

const initialState = {
  employee: [],
  editLoading: true,
};
export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEE_REQUEST:
      return { ...state, employee: [] };
    case actionTypes.GET_EMPLOYEE_RECEIVED:
      return {
        ...state,
        employee: [...action.payload],
      };
    case actionTypes.EDIT_EMPLOYEE_REQUEST:
      return { ...state, editLoading: true };
    case actionTypes.EDIT_EMPLOYEE_RECIVED:
      return {
        ...state,
        editLoading: false,
      };
    default:
      return state;
  }
}
