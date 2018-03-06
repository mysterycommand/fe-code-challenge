

export const ADD_COUNTER = (amount = 1) => ({
  type: 'ADD_COUNTER',
  amount,
});

export const SUB_COUNTER = (amount = 1) => ({
  type: 'SUB_COUNTER',
  amount,
});

export const AppActions = {
  ADD_COUNTER,
  SUB_COUNTER,
};
