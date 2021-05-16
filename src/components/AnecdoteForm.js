import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const [anecdote, setAnecdote] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    dispatch(addAnecdote(anecdote))

    setAnecdote('')
  }

  return (
    <div>
      <h2>Create new anecdote</h2>
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
