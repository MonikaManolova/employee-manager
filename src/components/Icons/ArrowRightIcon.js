import React from 'react'
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

export default ({ size = '20', color = '#FFFFFF', ...props }) => {
    return (
        <ArrowRight size={size} color={color} {...props} />
    )
}