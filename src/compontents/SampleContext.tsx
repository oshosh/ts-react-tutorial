import React, {createContext, Dispatch, useContext, useReducer} from 'react';

type Color = 'red' | 'orange' | 'yellow'

interface State {
    countS: number;
    textS: string;
    colorS: Color;
    isGoodS: boolean;
}

type Action = 
    | {type: 'SET_COUNT'; count : number} 
    | {type: 'SET_TEXT'; text: string} 
    | {type: 'SET_COLOR'; color: Color}
    | {type: 'TOGGLE_GOOD'}

function reducer(state:State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                countS: action.count
            };
        case 'SET_TEXT':
            return {
                ...state,
                textS: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                colorS: action.color
            }
        case 'TOGGLE_GOOD':
            return{
                ...state,
                isGoodS: !state.isGoodS
            }
        default:
            throw new Error('error')
    }
}

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);;
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

type SampleProviderProps = {
    children: React.ReactNode;
};

export function SampleProvider({ children }: SampleProviderProps) {
    const [state, dispatch] = useReducer(reducer, {
        countS: 0,
        textS: 'hello',
        colorS: 'red',
        isGoodS: true
    });

    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    );
};

export function useSampleState() {
    const state = useContext(SampleStateContext);
    if(!state) throw new Error('Cannot find SampleProvider')
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if(!dispatch) throw new Error('Cannot find SampleProvider')
    return dispatch;
}