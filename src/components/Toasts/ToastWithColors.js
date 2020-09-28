import React from 'react'
import * as UI from './UI'
import { Toast } from 'react-bootstrap'

export default ({ isOpen, setIsOpen, data, setData, onClick }) => {
  const colors = ['#FF7171', '#FFC471', '#4BD07F', '#A178FC']

  return (
    <UI.StyledToast
      animation={false}
      show={isOpen.areColorsOpen}
      onClose={() => setIsOpen({ ...isOpen, areColorsOpen: false })}>
      <Toast.Header />
      <Toast.Body>
        <UI.StyledLabel>Choose color</UI.StyledLabel>
        {colors.map(color =>
          <UI.Item
            className={data.background === color && 'selected'}
            onClick={() => setData({ ...data, background: color })}
            background={color}
            key={color} />
        )}
        <UI.StyledButton
          disabled={!data.background}
          onClick={onClick}>
          Add color
        </UI.StyledButton>
      </Toast.Body>
    </UI.StyledToast>
  )
}