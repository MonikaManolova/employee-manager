import React from 'react'
import { Add } from '@styled-icons/ionicons-outline/Add'

export default ({ size = '20', color = '#FFFFFF', ...props }) => {
    return (
        <Add size={size} color={color} {...props} />
    )
}
