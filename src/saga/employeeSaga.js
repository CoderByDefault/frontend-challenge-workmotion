import { put, takeLatest } from "redux-saga/effects";
import actionTypes from "../action/ActionTypes";
import * as employeeActions from "../action/employee";

function* fetchEmployee() {
  let results = [];
  const data = yield employeeActions.getAllEmployee();
  if (data) {
    results = data;
  }
  yield put({
    type: actionTypes.GET_EMPLOYEE_RECEIVED,
    payload: results,
  });
}

function* updateEmployee(payload) {
  const { data } = payload;
  const response = yield employeeActions.updateEmployee(data.id, {
    states: data.states,
  });
  if (response)
    yield put({
      type: actionTypes.GET_EMPLOYEE_REQUEST,
    });
}

export default function* PickupsWatcher() {
  yield takeLatest(actionTypes.GET_EMPLOYEE_REQUEST, fetchEmployee);
  yield takeLatest(actionTypes.EDIT_EMPLOYEE_REQUEST, updateEmployee);
}
