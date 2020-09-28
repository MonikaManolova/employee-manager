import React from 'react'
import { ArrowheadLeftOutline } from '@styled-icons/evaicons-outline/ArrowheadLeftOutline'
import { colors } from '../../constants'

export default ({ size = '20', color = colors.primaryColor, ...props }) => {
    return (
        <ArrowheadLeftOutline size={size} color={color} {...props} />
    )
}