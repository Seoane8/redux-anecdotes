const initialState = {
  message: null,
  interval: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION': {
      clearTimeout(state.interval)
      return {
        message: action.data.message,
        interval: action.data.interval
      }
    }
    case 'CLEAR_NOTIFICATION':
      return initialState
    default:
      return state
  }
}

export const setNotification = (message, timeout) => async dispatch => {
  const interval = setTimeout(
    () => dispatch(clearNotification),
    (timeout * 1000)
  )
  dispatch({
    type: 'SET_NOTIFICATION',
    data: { message, interval }
  })
}

const clearNotification = {
  type: 'CLEAR_NOTIFICATION'
}

export const getNofication = state => state.notification.message

export default reducer
