import { combineReducers } from "redux";
import counter from "./coutner";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>