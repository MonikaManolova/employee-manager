import styled, { keyframes } from 'styled-components'
import { Toast, FormControl, Form, Button } from 'react-bootstrap'
import { colors } from '../../constants'

const toastAnimation = keyframes`
  0%{opacity: 0; top: 60px;}
  100%{opacity: 1; top: 40px;}
`
export const StyledToast = styled(Toast)`
  position: absolute;
  top: 40px;
  left: -60px;
  min-width: calc(100% + 60px);
  z-index: 999;
  background: #FFFFFF !important;
  animation: ${toastAnimation} .4s ease-in-out;
  font-family: 'Poppins', sans-serif !important;
  .toast-header{
    border: 0 !important;
  }
  .close{
    top: 4px;
    position: absolute;
    right: 10px;
    font-size: 20px;
    color: ${colors.primaryColor};
    box-shadow: none !important;
    outline: none !important;
  }
`
export const StyledLabel = styled(Form.Label)`
  font-size: .8rem;
  color: ${colors.primaryColor};
  margin-bottom: 4px;
  font-family: 'Poppins', sans-serif; 
`
export const StyledInput = styled(FormControl)`
  border: 1px solid ${colors.primaryColor};
  border-radius: 20px;
  font-size: .85rem !important;
  margin-bottom: 12px;
  font-family: 'Poppins', sans-serif; 
  &::placeholder{
    color: #67A7FF;
  }
`
export const StyledButton = styled(Button)`
  font-family: 'Poppins', sans-serif; 
  background: linear-gradient(to right, #1978F9, #36B0FD) !important;
  border: 0;
  color: #FFFFFF;
  border-radius: 20px;
  font-size: .85rem;
  padding: 5px 0px;
  width: 100%;
  transition: all .5s ease;
`
/** COLORS */
export const Item = styled.div`
  width: 100%;
  height: 26px;
  margin-bottom: 8px;
  background: ${props => props.background};
  cursor: pointer;
  transition: all .5s ease;
  &.selected{
    transform: scale(1.06);
    border-radius: 20px;
  }
  &:hover{
    transform: scale(1.06);
  }
`