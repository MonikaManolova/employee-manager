import React from 'react'
import { Edit } from '@styled-icons/material/Edit'

export default ({ size = '20', color = '#FFFFFF', ...props }) => {
    return (
        <Edit size={size} color={color} {...props} />
    )
}