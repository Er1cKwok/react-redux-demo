export function createStore(reducer) {
  let state = undefined;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(v => v());

    return action;
  }

  function subscribe(cb) {
    listeners.push(cb);
  }

  dispatch({type: '@Eric and Janice'});

  return {
    getState,
    dispatch,
    subscribe
  }
}