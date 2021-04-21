import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state)=> {
    console.log('increment')
    return state+1;
  }),
  on(decrement, (state)=> {
    console.log('decrement')
    return state-1;}),
  on(reset, (state)=> {
    console.log('reset')
    return 0;}),

)

export function counterReducer(state: number = initialState, action: Action) {
  return _counterReducer(state, action);
}
