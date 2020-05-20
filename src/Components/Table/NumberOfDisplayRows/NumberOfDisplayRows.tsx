import React from 'react'
import {
  Wrapper,
  StyledButton,
  StyledH3,
  ButtonsWrapper,
  StyledH5,
} from './NumberOfDisplayRows.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

interface IDetailProps {
  howManyItemsOnSite: number
  setHowManyItemsOnSite: (value: number) => void
}

export const NumberOfDisplayRows: React.FC<IDetailProps> = (props) => {
  const { howManyItemsOnSite } = props
  return (
    <Wrapper>
      <StyledH3>Change the number of rows displayed (-5/+5)</StyledH3>
      <ButtonsWrapper>
        <StyledButton
          isDisable={howManyItemsOnSite <= 5}
          disabled={howManyItemsOnSite <= 5}
          onClick={() => {
            if (howManyItemsOnSite !== 5) props.setHowManyItemsOnSite(howManyItemsOnSite - 5)
          }}
        >
          <FontAwesomeIcon icon={faMinus} />
        </StyledButton>
        <StyledH5>{howManyItemsOnSite}</StyledH5>
        <StyledButton
          isDisable={false}
          onClick={() => {
            props.setHowManyItemsOnSite(howManyItemsOnSite + 5)
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}
