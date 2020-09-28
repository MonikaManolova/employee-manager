import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'

const Header = styled.div`
  width: 100vw;
  background-color: ${colors.primaryColor};
  padding: 10px 70px;
  .logo{
    font-weight: 700;
    font-size: 1.625rem;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
  }
  .thin{
    font-weight: 400;
    font-size: 1rem;
  }
`

export default()=>{
  return(
    <Header>
      <span className='logo'>
        <span className='thin'>my</span>Employees.
      </span>
    </Header>
  )
}