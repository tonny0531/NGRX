import { Action } from '@ngrx/store';

export const initialState = 0;
export const Incr = 'Incr';
export const Decr = 'Decr';
export const Reset = 'Reset';


export function counterReducer(state: number = initialState, action: Action) {
  console.log(action);
  switch (action.type) {
    case Incr:
      return state + 1;
    case Decr:
      return state - 1;
    case Reset:
      return 0;
    default:
      return state;
  }
}
