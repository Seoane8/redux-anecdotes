const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MODIFY_FILTER':
      return action.filter
    case 'DELETE_FILTER':
      return initialState
    default:
      return state
  }
}

export const modifyFilter = filter => ({
  type: 'MODIFY_FILTER',
  filter
})

export const deleteFilter = () => ({
  type: 'DELETE_FILTER'
})

export const getFilter = state => state.filter

export default reducer
