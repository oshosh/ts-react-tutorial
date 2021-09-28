# ts-react-tutorial

## TS + Hooks 알아보기, React.FC를 써야하나 ?
 ```
  Counter.tsx           (useState -> useReducer 사용하기)
  FunctionGreetings.tsx (React.FC를 쓰고 안쓰고 차이)
  Greetings.tsx         (React.FC를 쓰고 안쓰고 차이)
  MyForm.tsx            (기본 form 생성 해보기)
  
 ```
 - https://blog.naver.com/qhanfckwsmsd/222517582662

## TS + Hooks - TypeAlias와 interface의 차이를 이용한 useReducer 구현
   ```
    ReducerSample.tsx
   ```
 - https://blog.naver.com/qhanfckwsmsd/222517646382

## TS + Hooks - Context API 간단 구현 예제
  ```
   ContextAPISample.tsx (SampleContext에서 구현한 cutomHook 적용 예제 - state로 값 반환, dispatch를 통한 action data 객체 전달 )
   SampleContext.tsx    (contextAPI 예제 및 state, dispatch customHook)
  ```
  - https://blog.naver.com/qhanfckwsmsd/222518558326

## TS + Hooks - Redux 모듈 적용하기
 ```
 Counter 만들기, Todolist 만들기
 
 compontents2
 Counter.tsx
 
 container
 CounterContainer.tsx
 
 compontents2
 1. TodoInsert.tsx 
 2. TodoItem.tsx
 3. TodoList.tsx
 
 container
 1. TodoApp.tsx
 
 modules (reducer + combineReducers) 
 1. todos.ts
 2. coutner.ts
 2. index.ts
 
 app.js
 ```
  - https://blog.naver.com/qhanfckwsmsd/222518753079

## TS + Hooks - redux + typesafe-actions
 - https://blog.naver.com/qhanfckwsmsd/222519689574

## typesafe-actions을 활용한 커스텀 createReducer - velopert님 프로젝트에서 사용 방법 가져옴
 - redux를 action, reducer를 모듈화 하기보다 duck 패턴을 이용하더라도 코드가 많이 축약되어 한눈에 보기 좋음
 ```
 lib/util
 
 export type Handlers<T> = {
    [type: string]: (state: T, action: any) => T;
};

export function createReducer<S>(handlers: Handlers<S>, initialState: S) {
    return (state: S = initialState, action: any) => {
        const handler = handlers[action.type];
        if (!handler) return state;
        return handler(state, action);
    };
}

export function updateKey<S, K extends keyof S>(
    state: S,
    key: K,
    value: S[K],
): S {
    return {
        ...state,
        [key]: value,
    };
}

import { deprecated, ActionType } from "typesafe-actions";
import { createReducer, updateKey } from '../lib/util'
const { createStandardAction } = deprecated;

const INCREASE_BY = 'counter/INCREASE_BY';
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

type CounterState = {
    count: number
}
const initialState: CounterState = {
    count: 0
}

const counter = createReducer({
    [INCREASE_BY]: (state, action: ReturnType<typeof increaseBy>) =>
        updateKey(state, 'count', action.payload),
}, initialState)
 ```
