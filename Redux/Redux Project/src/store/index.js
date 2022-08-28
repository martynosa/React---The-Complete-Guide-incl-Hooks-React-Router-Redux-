// VANILLA WAY
// import { createStore } from 'redux';

// const counterReducer = (state = initState, action) => {
//   if (action.type === 'INCR') {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === 'DECR') {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === 'PLUS_NUMBER') {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'TOGGLE') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

import { createSlice, configureStore } from '@reduxjs/toolkit'; // redux is included in @reduxjs/toolkit

const initCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    plusFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
