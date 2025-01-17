import React, { useState } from 'react'
import {
  StyledTable,
  StyledWrapper,
  StyledHeader,
  SpinnerWrapper,
  StyledText,
} from './Table.styled'
import { Search } from '../Search/Search'
import { TitleSvg } from '../../Assets/TitleSvg'
import { CompaniesAndIncomesData } from '../../Types/Inferaces/ListOfInterfaces'
import { SingleRow } from './SingleRow/SingleRow'
import { SingleHeader } from './SingleHeader/SingleHeader'
import { Spinner } from '../UI/SpinnerForExerciseInfoPanel/Spinner'
import { WhichColumn, ChevronType, MessageType } from '../../Types/Enums/EnumsList'
import MenageData from '../../Types/Classes/MenageData'
import MenagePagginationData from '../../Types/Classes/MenagePagginationData'
import { Paggination } from '../Paggination/Paggination'
import { NumberOfDisplayRows } from '../NumberOfDisplayRows/NumberOfDisplayRows'
import MessageBox from '../UI/MessageBox/MessageBox'

interface IDetailProps {
  data: CompaniesAndIncomesData[]
  loading: boolean
  messageType?: {
    text: string
    type: MessageType
  } | null
  isMessageBoxVisible: boolean
}

const headerNames = ['Id', 'Name', 'City', 'Total incomes', 'Avarage incomes', 'Last month incomes']

export const Table: React.FC<IDetailProps> = (props) => {
  const [whichButton, setWhichButton] = useState<WhichColumn>(0)
  const [reverseButton, setReverseButton] = useState(false)
  const [displayData, setDisplayData] = useState<CompaniesAndIncomesData[] | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [whichPage, setWhichPage] = useState(1)
  const [howManyItemsOnSite, setHowManyItemsOnSite] = useState(20)

  let { data, loading, messageType, isMessageBoxVisible } = props

  if (!loading && displayData === null) setDisplayData(data)

  let showData = null
  let showSpinner = null
  let showPaggination = null
  let showMessageBox = null

  //HeaderButtonHandle
  const handleButton = (id: WhichColumn) => {
    if (id === whichButton && reverseButton === false) {
      setReverseButton((prevState) => !prevState)
      setDisplayData(MenageData.filterData(data, id, true))
    } else {
      setReverseButton(false)
      setDisplayData(MenageData.filterData(data, id))
    }
    setWhichButton(id)
  }

  //HandleInput
  const handleInputValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value.toLowerCase())
    setWhichPage(1)
  }

  //HandleNumberOfRowsDisplayed

  const handleNumberOfRowsDisplayed = (number: number) => {
    setHowManyItemsOnSite(number)
    setWhichPage(1)
  }

  //ShowHeaders
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
        loading={loading}
      />
    )
  })

  //Display Data
  if (!loading && displayData !== null) {
    showMessageBox = (
      <MessageBox isMessageBoxVisible={isMessageBoxVisible} messageType={messageType} />
    )
    let filterData = displayData
    if (inputValue.length !== 0) filterData = MenageData.filterByInputValue(displayData, inputValue)

    //Pagination
    showPaggination = (
      <Paggination
        whichPage={whichPage}
        arrayLength={filterData.length}
        howManyItemsOnSite={howManyItemsOnSite}
        setWhichPage={setWhichPage}
      />
    )
    filterData = MenagePagginationData.sliceData(filterData, whichPage, howManyItemsOnSite)

    if (filterData.length !== 0) {
      showData = filterData.map((item) => (
        <SingleRow singleData={item} key={`singleRow${item.id}`} />
      ))
    } else showSpinner = <StyledText>No results found</StyledText>
  } else
    showSpinner = (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )

  return (
    <>
      {showMessageBox}
      <StyledWrapper>
        <StyledHeader>
          <TitleSvg />
          <Search handleInputValue={handleInputValue} />
          <NumberOfDisplayRows
            howManyItemsOnSite={howManyItemsOnSite}
            setHowManyItemsOnSite={handleNumberOfRowsDisplayed}
          />
        </StyledHeader>
        <StyledTable headerNames={headerNames}>
          <thead>
            <tr>{showHeader}</tr>
          </thead>
          <tbody>{showData}</tbody>
        </StyledTable>
        {showSpinner}
        {showPaggination}
      </StyledWrapper>
    </>
  )
}
