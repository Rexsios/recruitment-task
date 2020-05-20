import React from 'react'
import { StyledInput } from './Search.styles'

interface IDetailProps {
  handleInputValue: (event: React.FormEvent<HTMLInputElement>) => void
}

export const Search: React.FC<IDetailProps> = (props) => {
  return (
    <StyledInput isValid={true}>
      <div className="title">
        <span className="label">Enter the search value</span>
      </div>
      <input
        autoComplete="off"
        onChange={props.handleInputValue}
        type="text"
        name="email"
        placeholder="Search..."
      />
      <span className="focus"></span>
    </StyledInput>
  )
}
