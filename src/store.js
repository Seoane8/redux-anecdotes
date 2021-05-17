import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdotes from './reducers/anecdoteReducer'
import notification from './reducers/notificationReducer'
import filter from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes,
  notification,
  filter
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
