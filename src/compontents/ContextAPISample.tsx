import React from 'react';
import { useSampleDispatch, useSampleState } from './SampleContext';

function ContextAPISample() {
    const state = useSampleState();
    const dispatch = useSampleDispatch();

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

export default ContextAPISample;