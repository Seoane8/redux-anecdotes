import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { vote, anecdotesSortedByVotes } from '../reducers/anecdoteReducer'
import { addNotification, deleteNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(anecdotesSortedByVotes)
  const dispatch = useDispatch()

  const handleVote = anecdote => {
    dispatch(vote(anecdote.id))

    dispatch(addNotification(`You voted '${anecdote.content}'`))
    setInterval(
      () => dispatch(deleteNotification()),
      5000
    )
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
