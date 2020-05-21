import styled from 'styled-components'
import { globalStyles } from '../../globalStyles'

export const StyledWrapper = styled.div`
  width: 100%;
  color: #000;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const StyledHeader = styled.header`
  padding: 20px;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: white;

  h1 {
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    width: 90%;
    display: grid;
    column-gap: 10px;
    grid-template-columns: 4fr 2fr;
    grid-template-areas: 'title search' 'numRows search';
  }
`

interface IDetailPropsTable {
  headerNames: string[]
}

export const StyledTable = styled.table<IDetailPropsTable>`
  width: 100%;
  border-spacing:1px;
  background-color:#c48aed;
  tr {
    background-color: rgba(255, 255, 255, 0.9);
    &:nth-child(2n) {
      background-color: rgba(229, 229, 229, 0.9);
    }

    &:hover {
      background-color: ${globalStyles.borderMainColor2};
    }
  }

  tbody {
    background-color: ${globalStyles.borderMainColor2};
    tr {
      margin-bottom: 3px;
      display: block;
    }
  }

  th {
    background: #9b59b6;
    display: block;
    padding: 0;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;

    button {
      width: 100%;
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;

      &:hover,
      &:focus {
        background-color: #c48aed;
        cursor: pointer;
        outline: none;
        transition: 0.4s ease-in;
      }

      div {
        display: grid;
        grid-template-columns: 5fr 1fr;
        justify-items: center;
        align-items: center;
        p {
          margin: 10px 0;
        }
        svg {
          justify-self: left;
          margin-left: 3px;
        }
      }
    }
  }

  td {
      max-width: 500px;
      display: block;
      text-align: left;
      padding: 10px 5px 10px 180px;
      position: relative;

      &:before {
        content:'${(p) => p.headerNames[0]}';
        font-weight: 500;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }

      &:nth-of-type(2) {
        &:before {
          content: '${(p) => p.headerNames[1]}';
        }
      }

      &:nth-of-type(3) {
        &:before {
          content: '${(p) => p.headerNames[2]}';
        }
      }

      &:nth-of-type(4) {
        &:before {
          content: '${(p) => p.headerNames[3]}';
        }
      }

      &:nth-of-type(5) {
        &:before {
          content: '${(p) => p.headerNames[4]}';
        }
      }
      &:nth-of-type(6) {
        &:before {
          content: '${(p) => p.headerNames[5]}';
        }
      }
  }

  @media (min-width: 768px) {
    th {
      display: table-cell;
      button {
        div {
          padding: 0 5px;
          p {
            margin: 16px 0;
          }
        }
      }
    }

    tbody {
      background-color: inherit;
      tr {
        margin-bottom: 0;
        display: table-row;
      }
    }

    td {
      vertical-align: middle;
      text-align: center;
      padding: 15px 2px;
      display: table-cell;

      &:before {
        display: none;
      }
    }
  }
`

export const SpinnerWrapper = styled.div`
  margin: 40px auto;
  width: 25%;
`

export const StyledText = styled.h2`
  width: 100%;
  color: White;
  text-align: center;
  @media (min-width: 768px) {
    padding: 20px;
  }
`
