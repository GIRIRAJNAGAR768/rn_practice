import {createSlice} from '@reduxjs/toolkit';

const CounterSlice = createSlice({
  name: 'Counter',
  initialState: {
    counter: 0,
  },

  reducers: {
    increment(state: any) {
      return {...state, counter: state.counter + 1};
    },
    decrement(state: any) {
      return {...state, counter: state.counter - 1};
    },
  },
});

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;
