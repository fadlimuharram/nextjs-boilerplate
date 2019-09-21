import { clockConstants } from "../constants";


const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  exampleData: [],
  error: null,
  pending: false
}

export default (state = exampleInitialState, action) => {
  switch (action.type) {
    case clockConstants.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })

    case clockConstants.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })

    case clockConstants.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })

    case clockConstants.RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      })

    case clockConstants.LOAD_EXAMPLE_DATA + '_PENDING':
      return Object.assign({}, state, {
        pending: true
      })

    case clockConstants.LOAD_EXAMPLE_DATA + '_FULFILLED':

      return {
        ...state,
        ...exampleInitialState,
        exampleData: action.payload.data,
        pending: false
      }

    case clockConstants.LOAD_EXAMPLE_DATA + '_REJECTED':
      return Object.assign({}, state, {
        error: true,
        pending: false
      })

    default:
      return state
  }
}