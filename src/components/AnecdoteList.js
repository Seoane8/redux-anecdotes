import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote, anecdotesSortedByVotes } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(anecdotesSortedByVotes)
  const dispatch = useDispatch()

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => dispatch(vote(anecdote.id))}
            >
              vote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
