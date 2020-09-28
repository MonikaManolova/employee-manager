import styled, { keyframes } from 'styled-components'
import { colors } from '../../constants'
import { Col, Row, Button } from 'react-bootstrap'

const lineAnimation = keyframes`
  0%{width: 0%;}
  100%{width: 100%;}
`
const left = keyframes`
  0%{transform: translateX(-500px);}
  100%{transform: translateX(0);}
`
export const Header = styled.h1`
  color: ${colors.primaryColor};
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  width: 100%;
  text-align: center;
  margin: 70px 0;
  margin-bottom: 30px; 
  .thin{
    font-size: 1.4rem;
    font-weight: 300;
  }
`
export const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 50px;
  width: calc(100% - 140px);
  margin: 0 auto;
  padding: 20px 40px;
  box-shadow: 2px 16px 60px rgba(39, 130, 255, .24);
  margin-bottom: 180px;
  animation: ${left} 1s ease;
`
export const MainRow = styled(Row)`
  padding: 10px;
  padding-bottom: 24px;
  border-bottom: 1px solid #CBD8EF;
  .col, .col-md-2, .col-md-3{
    color: #67A7FF;
  }
`
export const StyledRow = styled(Row)`
  position: relative;
  align-items: center;
  padding: 10px 0;
  margin: 4px 0;
  &.odd{
    background-color: ${colors.bodyColor};
    border-radius: 20px;
    border: 1px solid ${colors.primaryColor};
  }
`
export const ImgContainer = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  img{
    height: 100%;
  }
  span{
    width: 100%;
    text-align: center;
  }
`
export const StyledCol = styled(Col)`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  color: ${colors.primaryColor};
  padding-right: 8px; 
  padding-left: 8px;
  font-family: 'Poppins', sans-serif; 
  font-size: .9rem;
  z-index: 99;
`
export const StyledField = styled.span`
  color: ${colors.primaryColor};
  font-family: 'Poppins', sans-serif;
  font-size: .9rem;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  max-width: 160px;
`
export const AddButton = styled(Button)`
  box-shadow: rgba(0, 89, 210, .3);
  background: linear-gradient(to right, #1978F9, #36B0FD) !important;
  border: none !important;
  border-radius: 20px;
  width: 130px;
  transition: all .5s ease;
  font-family: 'Poppins', sans-serif;
  font-size: .85rem;
  &:hover{
    transform: translateY(-5px);
  }
  &.paint{
    width: 50px;
    svg{
      position: relative;
      bottom: 1px;
    }
  }
`
export const ColorElement = styled.div`
  background: ${props => props.background};
  width: 100%;
  height: 6px;
  bottom: -1px;
  position: absolute;
  border-radius: 4px;
  animation: ${lineAnimation} .5s ease;
`