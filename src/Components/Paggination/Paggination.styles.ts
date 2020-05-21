import styled from 'styled-components'
import { globalStyles } from '../../globalStyles'

export const PagginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const PagginationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: block;
  margin: 30px 0px;
`

interface IDetailPropsElement {
  isActive: boolean
  isDisable: boolean
}

export const PagginationElement = styled.li<IDetailPropsElement>`
  display: inline-block;

  button {
    padding: 8px 12px;
    background-color: ${(p) => {
      if (p.isActive) return '#c36aed'
      else if (p.isDisable) return 'gray'
      else return globalStyles.mainColor2
    }};
    border: 1px solid ${globalStyles.borderMainColor2};
    margin: 3px;
    font-weight: 700;
    font-size: 14px;
    border-radius: 5px;
    color: white;
    transition: 0.1s ease-in;
    &:hover,
    &:focus {
      outline: none;
      background-color: ${(p) => {
        if (p.isActive) return '#c36aed'
        else if (p.isDisable) return 'gray'
        else return '#c36aed'
      }};
      cursor: ${(p) => (p.isActive || p.isDisable ? 'default' : 'pointer')};
      transition: 0.3s ease-in;
    }
  }

  @media (min-width: 768px) {
    button {
      padding: 10px 16px;
    }
  }
`
