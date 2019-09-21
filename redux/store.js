import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import reduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "./reducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['exampleData'] // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, reducer)



export function initializeStore(initialState) {

  const mdl = compose(
    composeWithDevTools(applyMiddleware(reduxThunk, promise))
  );
  return createStore(
    persistedReducer,
    initialState,
    mdl
  )
}