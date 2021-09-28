// import { deprecated, ActionType, createReducer } from "typesafe-actions";
import { deprecated, ActionType } from "typesafe-actions";
import { createReducer, updateKey } from '../lib/util'
const { createStandardAction } = deprecated;

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

type CounterState = {
    count: number
}
const initialState: CounterState = {
    count: 0
}

const actions = { increase, decrease, increaseBy }
type CounterAction = ActionType<typeof actions>;

const counter = createReducer({
    [INCREASE_BY]: (state, action: ReturnType<typeof increaseBy>) =>
        updateKey(state, 'count', action.payload),
}, initialState)

// const counter = createReducer<CounterState, CounterAction>(initialState, {
//     [INCREASE]: (state) => ({ count: state.count + 1 }),
//     [DECREASE]: (state) => ({ count: state.count - 1 }),
//     [INCREASE_BY]: (state, action) => {
//         return {
//             count: state.count + action.payload
//         }
//     },
// });

export default counter;