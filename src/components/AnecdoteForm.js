import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = props => {
  const [anecdote, setAnecdote] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    props.addAnecdote(anecdote)

    props.setNotification(`You have added '${anecdote}'`, 5)
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

const mapDispatchToProps = {
  addAnecdote,
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
