const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return action.message
    case 'DELETE_NOTIFICATION':
      return initialState
    default:
      return state
  }
}

export const addNotification = message => ({
  type: 'ADD_NOTIFICATION',
  message
})

export const deleteNotification = () => ({
  type: 'DELETE_NOTIFICATION'
})

export const getNofication = state => state.notification

export default reducer
