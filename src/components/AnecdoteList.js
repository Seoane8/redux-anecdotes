import React from 'react'
import { connect } from 'react-redux'

import { vote, anecdotesSortedByVotes, filterAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = props => {
  const handleVote = anecdote => {
    props.vote(anecdote.id, anecdote.votes)

    props.setNotification(`You voted '${anecdote.content}'`, 5)
  }

  return (
    <div>
      {props.anecdotes.map(anecdote =>
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

const mapStateToPops = state => ({
  anecdotes: filterAnecdotes(anecdotesSortedByVotes(state), state.filter)
})

const mapDispatchToProps = {
  vote,
  setNotification
}

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(AnecdoteList)
