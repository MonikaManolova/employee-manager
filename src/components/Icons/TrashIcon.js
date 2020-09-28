import React from 'react'
import { Trash } from '@styled-icons/fa-solid/Trash'

export default ({ size = '20px', color = '#FFFFFF', ...props }) => {
  return (
    <Trash size={size} color={color} {...props} />
  )
}