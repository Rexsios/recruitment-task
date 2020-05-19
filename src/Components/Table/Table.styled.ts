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

export const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  tr {
    background: #fff;
    &:nth-child(2n) {
      background-color: #e5e5e5;
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
        grid-template-columns: 5fr 1fr;
        justify-items: center;
        align-items: center;
        svg {
          justify-self: left;
          margin-left: 1px;
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
      padding: 10px 20px 10px 170px;
      position: relative;

      &:before {
        content: 'Id';
        font-weight: 500;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }

      &:nth-of-type(2) {
        &:before {
          content: 'Name';
        }
      }

      &:nth-of-type(3) {
        &:before {
          content: 'City';
        }
      }

      &:nth-of-type(4) {
        &:before {
          content: 'Total incomes';
        }
      }

      &:nth-of-type(5) {
        &:before {
          content: 'Avarage incomes';
        }
      }
      &:nth-of-type(6) {
        &:before {
          content: 'Last month';
        }
      }
    }
  }
`
