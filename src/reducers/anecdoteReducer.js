import anecdotesService from '../service/anecdotes'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE': {
      const id = action.id
      const anecdoteToVote = state.find(anecdote => anecdote.id === id)
      const updatedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : updatedAnecdote
      )
    }
    case 'ADD_ANECDOTE':
      return [...state, action.anecdote]
    case 'INIT_ANECDOTES':
      return action.anecdotes
    default:
      return state
  }
}

export const vote = id => {
  return {
    type: 'VOTE',
    id
  }
}

export const addAnecdote = content => async dispatch => {
  const anecdote = await anecdotesService.createNew({ content, votes: 0 })

  dispatch({
    type: 'ADD_ANECDOTE',
    anecdote
  })
}

export const initAnecdotes = () => async dispatch => {
  const anecdotes = await anecdotesService.getAll()
  dispatch({
    type: 'INIT_ANECDOTES',
    anecdotes
  })
}

export const anecdotesSortedByVotes = state =>
  state.anecdotes.sort((a, b) => b.votes - a.votes)

export const filterAnecdotes = (anecdotes, filter) =>
  anecdotes
    .filter(anecdote =>
      anecdote.content
        .toLowerCase()
        .includes(filter.toLowerCase())
    )

export default reducer
