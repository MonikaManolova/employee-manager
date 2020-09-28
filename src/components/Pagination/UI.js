import styled from 'styled-components'
import { Pagination } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export const Container = styled.div`
  margin: 20px auto;
  margin-top: 30px;
  width: fit-content;
`
export const StyledButton = styled(Button)`
  background: none !important;
  border: none !important;
  cursor: pointer;
  padding: 0 4px !important;
  margin: 2px;
`
export const Text = styled.span`
  width: 150px;
  text-align: center;
  font-size: .85rem;
  color: #67A7FF;
`
export const PaginationItem = styled(Pagination.Item)`
  span, a{
    background-color: none !important;
    background: none !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
  }
  span{
    color: black!important;
    border-bottom: 2px solid black !important;
  }
`