import React from 'react'
import * as UI from './UI'
import { Toast } from 'react-bootstrap'

export default ({ isOpen, setIsOpen, onChange, data, disabled, onClick }) => {

  return (
    <UI.StyledToast
      animation={false}
      show={isOpen.isInputOpen}
      onClose={() => setIsOpen({ ...isOpen, isInputOpen: false })}>
      <Toast.Header />
      <Toast.Body>
        <UI.StyledLabel>Enter your label below</UI.StyledLabel>
        <UI.StyledInput
          value={data.label ? data.label : ''}
          onChange={onChange}
          type="text"
          placeholder="Type..." />
        <UI.StyledButton
          disabled={disabled}
          onClick={onClick}>
          Submit
        </UI.StyledButton>
      </Toast.Body>
    </UI.StyledToast>
  )
}