import React, { useState } from 'react'
import { StyledTable, StyledWrapper, StyledHeader, SpinnerWrapper } from './Table.styled'
import { Search } from '../Search/Search'
import { TitleSvg } from '../../Assets/TitleSvg'
import { CompaniesAndIncomesData } from '../../Types/Inferaces/ListOfInterfaces'
import { SingleRow } from './SingleRow/SingleRow'
import { SingleHeader } from './SingleHeader/SingleHeader'
import { Spinner } from '../UI/SpinnerForExerciseInfoPanel/Spinner'
import { WhichColumn, ChevronType } from '../../Types/Enums/EnumsList'
import MenageData from '../../Types/Classes/MenageData'

interface IDetailProps {
  data: CompaniesAndIncomesData[]
  loading: boolean
}

export const Table: React.FC<IDetailProps> = (props) => {
  const [whichButton, setWhichButton] = useState<WhichColumn>(0)
  const [reverseButton, setReverseButton] = useState(false)
  console.log('reRender')
  let { data, loading } = props
  let showData = null
  let showSpinner = null

  const handleButton = (id: WhichColumn) => {
    setWhichButton(id)
    if (id === whichButton) setReverseButton(!reverseButton)
    else setReverseButton(false)
  }

  const headerNames = [
    'Id',
    'Name',
    'City',
    'Total incomes',
    'Avarage incomes',
    'Last month incomes',
  ]

  const showHeader = headerNames.map((item, i) => {
    let chevronType = ChevronType.DEFAULT
    if (i + 1 === whichButton) chevronType = ChevronType.ASCENDING
    if (i + 1 === whichButton && reverseButton === true) chevronType = ChevronType.DESCENDING
    return (
      <SingleHeader
        name={item}
        id={i + 1}
        key={`singleHeader${i}`}
        chevronType={chevronType}
        handleButton={handleButton}
      />
    )
  })

  let filteredData = data
  if (whichButton !== 0) {
    if (reverseButton) filteredData = MenageData.filterData(data, whichButton, true)
    else filteredData = MenageData.filterData(data, whichButton)
  }

  if (!loading)
    showData = filteredData.map((item, i) => (
      <SingleRow singleData={item} key={`singleRow${item.id}`} />
    ))
  else
    showSpinner = (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )

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
