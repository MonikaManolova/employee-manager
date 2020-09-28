import styled, { keyframes } from 'styled-components'
import { colors } from '../../constants'

const shadow = keyframes`
  0%{transform: scaleX(1.5);}
  40%{
    transform: scaleX(1);
    opacity: .7;
  }
  100%{
    transform: scaleX(.2);
    opacity: .4;
  }
`
const circle = keyframes`
  0%{
    top:60px;
    height:5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }
  40%{
    height:20px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100%{top:0%;}
`
export const Container = styled.div`
  width: 200px;
  height: 60px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
export const Circle = styled.div`
  width:20px;
  height:20px;
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.primaryColor};
  left:15%;
  transform-origin: 50%;
  animation: ${circle} .5s alternate infinite ease;

  &:nth-child(2){
    left:45%;
    animation-delay: .2s;
  }
  &:nth-child(3){
    left:auto;
    right:15%;
    animation-delay: .3s;
  }
`
export const Shadow = styled.div`
  width:20px;
  height:4px;
  border-radius: 50%;
  background-color: #61A4FF;
  position: absolute;
  top:62px;
  transform-origin: 50%;
  z-index: -1;
  left:15%;
  filter: blur(1px);
  animation: ${shadow} .5s alternate infinite ease;

  &:nth-child(4){
    left: 45%;
    animation-delay: .2s;
  }
  &:nth-child(5){
    left:auto;
    right:15%;
    animation-delay: .3s;
  }
`
export const Text = styled.span`
  position: absolute;
  top:75px;
  font-family: 'Lato';
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 10px;
  color: ${colors.primaryColor};
  left: 15%;
`