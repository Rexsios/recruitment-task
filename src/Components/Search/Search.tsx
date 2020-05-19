import React from 'react'
import { StyledInput } from './Search.styles'

export const Search = () => {
  return (
    <StyledInput isValid={true}>
      <div className="title">
        <span className="label">Enter the search value</span>
      </div>
      <input type="text" name="email" placeholder="Search..." />
      <span className="focus"></span>
    </StyledInput>
  )
}
