import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { vote, anecdotesSortedByVotes, filterAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { getFilter } from '../reducers/filterReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const filter = useSelector(getFilter)
  const sortedAnecdotes = useSelector(anecdotesSortedByVotes)
  const anecdotes = filterAnecdotes(sortedAnecdotes, filter)

  const handleVote = anecdote => {
    dispatch(vote(anecdote.id, anecdote.votes))

    dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
  }

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
              onClick={() => handleVote(anecdote)}
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
