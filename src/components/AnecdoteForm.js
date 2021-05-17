import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [anecdote, setAnecdote] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(addAnecdote(anecdote))

    dispatch(setNotification(`You have added '${anecdote}'`, 5))
    setAnecdote('')
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
