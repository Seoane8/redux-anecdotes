import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdotes from './reducers/anecdoteReducer'
import notification from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes,
  notification
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store
