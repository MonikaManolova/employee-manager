import React from 'react'
import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline'
import { colors } from '../../constants'

export default ({ size = '20', color = colors.primaryColor, ...props }) => {
    return (
        <ArrowIosBackOutline size={size} color={color} {...props} />
    )
}