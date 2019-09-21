import { clockConstants } from "../constants";

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

export const loadExampleData = data => {
  return { type: clockConstants.LOAD_EXAMPLE_DATA, data }
}

export const loadingExampleDataFailure = () => {
  return { type: clockConstants.LOADING_DATA_FAILURE }
}