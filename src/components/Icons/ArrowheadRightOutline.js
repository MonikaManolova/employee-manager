import React from 'react'
import { ArrowheadRightOutline } from '@styled-icons/evaicons-outline/ArrowheadRightOutline'
import { colors } from '../../constants'

export default ({ size = '20', color = colors.primaryColor, ...props }) => {
    return (
        <ArrowheadRightOutline size={size} color={color} {...props} />
    )
}