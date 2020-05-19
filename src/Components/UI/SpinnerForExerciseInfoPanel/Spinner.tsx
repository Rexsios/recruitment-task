import React from 'react'
import { StyledSpinner } from './Spinner.styles'

interface IDetailProps {
  className?: string
}

export const Spinner: React.FC<IDetailProps> = (props) => {
  return (
    <StyledSpinner viewBox="0 0 50 50" className={props.className}>
      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </StyledSpinner>
  )
}
