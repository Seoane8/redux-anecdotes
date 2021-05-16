import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { modifyFilter, getFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)

  const handleChange = event => {
    dispatch(modifyFilter(event.target.value))
  }
  const style = {
    marginTop: 20,
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={filter} />
    </div>
  )
}

export default Filter
