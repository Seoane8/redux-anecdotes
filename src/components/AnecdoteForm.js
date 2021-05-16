import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, deleteNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [anecdote, setAnecdote] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(addAnecdote(anecdote))

    dispatch(addNotification(`You have added '${anecdote}'`))
    setAnecdote('')
    setInterval(
      () => dispatch(deleteNotification()),
      5000
    )
  }

  return (
    <div>
      <h3>Create new anecdote</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='anecdote'
            placeholder='anecdote'
            value={anecdote}
            onChange={({ target }) => setAnecdote(target.value)}
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
