import styled from 'styled-components'

interface IDetailPropsInput {
  isValid: boolean
}

export const StyledInput = styled.div<IDetailPropsInput>`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #dbdbdb;
  grid-area: search;

  .label {
    font-weight: 600;
    font-size: 18px;
    color: #999999;
    padding-left: 2px;
    align-self: center;
    line-height: 2;
  }

  .title {
    display: flex;
  }

  input {
    display: block;
    border: none;
    height: 50px;
    background: transparent;
    font-weight: 400;
    font-size: 22px;
    width: 100%;
    color: #555555;
    line-height: 1.2;
    padding: 0 2px;

    &:focus {
      outline: none;
    }
  }

  input:focus + .focus:before {
    width: 100%;
  }

  .focus {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.4s;
      background: linear-gradient(45deg, #aa39d6, rgba(115, 4, 159, 1));
    }
  }
`
