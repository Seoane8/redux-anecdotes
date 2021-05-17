const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.message
    case 'CLEAR_NOTIFICATION':
      return initialState
    default:
      return state
  }
}

export const setNotification = (message, timeout) => async dispatch => {
  dispatch({
    type: 'SET_NOTIFICATION',
    message
  })
  setInterval(
    () => dispatch(clearNotification),
    (timeout * 1000)
  )
}

const clearNotification = {
  type: 'CLEAR_NOTIFICATION'
}

export const getNofication = state => state.notification

export default reducer
