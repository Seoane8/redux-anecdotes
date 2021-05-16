import React from 'react'
import { useSelector } from 'react-redux'

import { getNofication } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(getNofication)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (!notification) return null

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
