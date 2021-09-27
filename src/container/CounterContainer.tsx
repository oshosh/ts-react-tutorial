import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../compontents2/Counter';
import { RootState } from '../modules';
import { decrease, increase, increaseBy } from '../modules/coutner';

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    const onIncreaseBy = (diff : number) => {
        dispatch(increaseBy(diff));
    }
    return (
        <Counter 
        count={count} 
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseBy={onIncreaseBy}
        />
    )
}

export default CounterContainer