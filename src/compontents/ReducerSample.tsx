import React, {useReducer} from 'react';

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

function ReducerSample() {
    const [state, dispatch] = useReducer(reducer, {
        countS: 0,
        textS: 'hello',
        colorS: 'red',
        isGoodS: true
    });

    const setCount = () => dispatch({type: 'SET_COUNT', count: 5});
    const setText = () => dispatch({type: 'SET_TEXT', text: 'bye'});
    const setColor = () => dispatch({type: 'SET_COLOR', color: 'orange'});
    const toogleGood = () => dispatch({type: 'TOGGLE_GOOD'});

    return (
        <div>
            <p>
                <code>count: </code> {state.countS}
            </p>
            <p>
                <code>text: </code> {state.textS}
            </p>
            <p>
                <code>color: </code> {state.colorS}
            </p>
            <p>
                <code>isGood: </code> {state.isGoodS ? 'true': 'false'}
            </p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={toogleGood}>TOGGLE_GOOD</button>
            </div>
        </div>
    )
}

export default ReducerSample;