import styled, { keyframes } from 'styled-components'
import { FormControl, Form } from 'react-bootstrap'
import { colors } from '../../constants'

const left = keyframes`
  0%{transform: translateY(-60px);}
  100%{transform: translateY(0);}
`
export const Container = styled.div`
  width: calc(100% - 200px);
  margin: 0 auto;
  margin-bottom: 20px;
  animation: ${left} 1.2s ease;
`
export const StyledLabel = styled(Form.Label)`
  font-size: .85rem;
  padding-left: 10px;
  color: ${colors.primaryColor};
  margin-bottom: 4px;
`
export const StyledInput = styled(FormControl)`
  border-radius: 20px;
  border: none !important;
  padding-left: 20px; 
  padding-left: 20px; 
  font-size: .9rem !important;
  font-family: 'Poppins', sans-serif;
  box-shadow: 2px 4px 10px 0 rgba(39, 130, 255, .24);
  
  &::placeholder{
    color: #67A7FF;
  }
`
