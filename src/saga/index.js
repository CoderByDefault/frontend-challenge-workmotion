import { all, fork } from "redux-saga/effects";
import employeeWatcher from "./employeeSaga";

export default function* rootSaga() {
  yield all([fork(employeeWatcher)]);
}
