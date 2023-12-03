import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import { store } from "index";
import AuthReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Auth: AuthReducer,
  Account: AccountReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
