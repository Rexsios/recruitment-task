import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: 100%;
  color: #000;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`

export const StyledHeader = styled.header`
  display: grid;
  column-gap: 10px;
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
    grid-template-columns: 2fr 1fr;
  }
`

interface IDetailPropsTable {
  headerNames: string[]
}

export const StyledTable = styled.table<IDetailPropsTable>`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  tr {
    background-color:rgba(255,255,255,0.9);
    &:nth-child(2n) {
      background-color: rgba(229,229,229,0.9);
    }

    &:hover {
      background-color: #d59aed;
    }
  }

  th {
    background: #9b59b6;
    padding: 0 !important          ;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;

    button {
      width: 100%;
      height: 100%;
      padding: 15px 10px;
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;

      div {
        display: grid;
        padding:0 5px;
        grid-template-columns: 5fr 1fr;
        justify-items: center;
        align-items: center;
        svg {
          justify-self: left;
          margin-left: 3px;
        }
      }

      &:hover,
      &:focus {
        background-color: #c48aed;
        cursor: pointer;
        outline: none;
        transition: 0.4s ease-in;
      }
    }
  }

  td {
    padding: 15px 2px;
    vertical-align: middle;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    th {
      display: block;
      padding: 0;
    }

    td {
      display: block;
      text-align: left;
      padding: 10px 20px 10px 200px;
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
  }
`

export const SpinnerWrapper = styled.div`
  margin: 40px auto;
  width: 30%;
`

export const StyledText = styled.h2`
  width: 100%;
  color: White;
  text-align: center;
  padding: 20px;
`
