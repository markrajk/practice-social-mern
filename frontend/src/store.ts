import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { googleAuthReducer, currentUserReducer } from './reducers/userReducers'

const reducer = combineReducers({
  googleAuth: googleAuthReducer,
  // currentUser: currentUserReducer,
})

const initialState = {} as any

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
