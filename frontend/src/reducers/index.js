import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import users from './users'
import banking from './banking'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    users,
    banking
    // Outros reducers aqui
  });
