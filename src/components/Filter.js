import React from 'react'
import { connect } from 'react-redux'

import { modifyFilter } from '../reducers/filterReducer'

const Filter = props => {
  const handleChange = event => {
    props.modifyFilter(event.target.value)
  }
  const style = {
    marginTop: 20,
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={props.filter} />
    </div>
  )
}

const mapStateToPops = state => ({
  filter: state.filter
})

export default connect(
  mapStateToPops,
  { modifyFilter }
)(Filter)
