import React from 'react'
import { StyledTable, StyledWrapper, StyledHeader, SpinnerWrapper } from './Table.styled'
import { Search } from '../Search/Search'
import { TitleSvg } from '../../Assets/TitleSvg'
import { CompaniesAndIncomesData } from '../../Types/Inferaces/ListOfInterfaces'
import { SingleRow } from './SingleRow/SingleRow'
import { SingleHeader } from './SingleHeader/SingleHeader'
import { Spinner } from '../UI/SpinnerForExerciseInfoPanel/Spinner'

interface IDetailProps {
  data: CompaniesAndIncomesData[]
  loading: boolean
}

export const Table: React.FC<IDetailProps> = (props) => {
  let { data, loading } = props
  let showData = null
  let showSpinner = null
  if (!loading)
    showData = data.map((item, i) => <SingleRow singleData={item} key={`singleRow${item.id}`} />)
  else
    showSpinner = (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )

  const headerNames = [
    'Id',
    'Name',
    'City',
    'Total incomes',
    'Avarage incomes',
    'Last month income',
  ]
  const showHeader = headerNames.map((item, i) => (
    <SingleHeader name={item} id={i} key={`singleHeader${i}`} />
  ))

  return (
    <StyledWrapper>
      <StyledHeader>
        <TitleSvg />
        <Search />
      </StyledHeader>
      <StyledTable headerNames={headerNames}>
        <thead>
          <tr>{showHeader}</tr>
        </thead>
        <tbody>{showData}</tbody>
      </StyledTable>
      {showSpinner}
    </StyledWrapper>
  )
}
