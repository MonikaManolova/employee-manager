import React from 'react'
import * as UI from './UI'

export default () => {
  return (
    <UI.Container>
      <UI.Circle />
      <UI.Circle />
      <UI.Circle />
      <UI.Shadow />
      <UI.Shadow />
      <UI.Shadow />
      <UI.Text>Loading</UI.Text>
    </UI.Container>
  )
}