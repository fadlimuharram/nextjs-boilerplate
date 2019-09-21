import { clockConstants } from "../constants";
import axios from "axios";

export const serverRenderClock = () => {
  return { type: clockConstants.TICK, light: false, ts: Date.now() }
}
export const startClock = () => {
  return { type: clockConstants.TICK, light: true, ts: Date.now() }
}

export const incrementCount = () => {
  return { type: clockConstants.INCREMENT }
}

export const decrementCount = () => {
  return { type: clockConstants.DECREMENT }
}

export const resetCount = () => {
  return { type: clockConstants.RESET }
}

export const loadExampleData = () => async dispatch => {
  dispatch({
    type: clockConstants.LOAD_EXAMPLE_DATA,
    payload: axios.get('https://jsonplaceholder.typicode.com/users')
  })
}
