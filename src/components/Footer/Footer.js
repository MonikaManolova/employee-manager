import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'

const Container = styled.div`
  width: 100%;
  padding: 20px 70px;
  background: ${colors.primaryColor};
  position: sticky;
  bottom: 0;
  .name{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: #FFFFFF;
    span{
      font-weight: 300;
    }
  }
`
export default () => {
  return (
    <Container>
      <div className='name'>Monika <span>Manolova</span></div>
    </Container>
  )
}