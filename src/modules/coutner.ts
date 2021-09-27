const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });

type CounterState = {
    count: number
}
const initialState: CounterState = {
    count: 0
}

type CounterAction =
    | ReturnType<typeof increase>
    | { type: 'counter/DECREASE' }
    | { type: typeof INCREASE_BY, payload: number }

function counter(state: CounterState = initialState, action: CounterAction): CounterState {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 }
        case DECREASE:
            return { count: state.count - 1 }
        case INCREASE_BY:
            return { count: state.count + action.payload }
        default:
            return state;
    }
}

export default counter;