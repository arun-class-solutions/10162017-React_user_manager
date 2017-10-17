import { createStore, compose, applyMiddleware } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import userReducer from "../reducers/users";
import logger from "redux-logger";

const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);

export default createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunk, reactRouterMiddleware, logger))
);
