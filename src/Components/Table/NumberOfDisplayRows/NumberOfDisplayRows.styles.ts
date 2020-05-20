import styled from 'styled-components'
import { globalStyles } from '../../../globalStyles'

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`

export const StyledH3 = styled.h3`
  font-weight: 600;
  font-size: 18px;
  color: #999999;
  align-self: center;
  text-align: center;
  padding: 0;
  margin: 0;
`

export const StyledH5 = styled.h5`
  font-weight: 600;
  font-size: 18px;
  color: #999999;
  align-self: center;
  text-align: center;
  padding: 0;
  margin: 0;
`
interface IDetailProps {
  isDisable: boolean
}

export const StyledButton = styled.button<IDetailProps>`
  color: white;
  background: ${({ isDisable }) => (isDisable ? 'gray' : globalStyles.mainColor2)};;
  padding: 8px 10px;
  border: 4px solid ${({ isDisable }) => (isDisable ? 'gray' : globalStyles.borderMainColor2)};
  border-radius: 6px;
  transition: all 0.3s ease 0s;
  margin: 0 10px;

  &:hover,
  &:focus {
    border-radius: ${({ isDisable }) => isDisable ? '6px' : '20px'};
    border-color: ${({ isDisable }) => (isDisable ? 'gray' : globalStyles.borderMainColor2)};
    transition: all 0.5s ease 0s;
    outline: none;
    cursor: ${({ isDisable }) => (isDisable ? 'default' : 'pointer')};
  }
`
