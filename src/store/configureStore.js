import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
// import reducer from '../reducers/businessesReducer';
import rootReducer from "../reducer/rootReducer";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
