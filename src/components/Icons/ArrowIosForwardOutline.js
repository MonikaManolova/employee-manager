import React from 'react'
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline'
import { colors } from '../../constants'

export default ({ size = '20', color = colors.primaryColor, ...props }) => {
    return (
        <ArrowIosForwardOutline size={size} color={color} {...props} />
    )
}