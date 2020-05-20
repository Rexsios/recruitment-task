import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { PagginationList, PagginationElement, PagginationWrapper } from './Paggination.styles'
import ManagePagginationData from '../../Types/Classes/MenagePagginationData'

interface IDetailProps {
  whichPage: number
  arrayLength: number
  howManyItemsOnSite: number
  setWhichPage: (value: number) => void
}
export const Paggination: React.FC<IDetailProps> = (props) => {
  const { whichPage, arrayLength, howManyItemsOnSite } = props
  const totalSwitchNumber = Math.ceil(arrayLength / howManyItemsOnSite)
  let showPagginationElements = null
  let showLeftButton = null
  let showRightButton = null

  if (totalSwitchNumber > 1) {
    if (whichPage <= 3) {
      showPagginationElements = ManagePagginationData.setUpSmallNumberSwitches(totalSwitchNumber)
    } else {
      showPagginationElements = ManagePagginationData.generateNewSmallNumbers(
        whichPage,
        totalSwitchNumber
      )
    }

    showPagginationElements = showPagginationElements.map((item) => (
      <PagginationElement
        key={`PagginationElement${item}`}
        isDisable={false}
        isActive={item === whichPage}
      >
        <button disabled={item === whichPage} onClick={() => props.setWhichPage(item)}>
          {item}
        </button>
      </PagginationElement>
    ))

    showLeftButton = (
      <PagginationElement isDisable={whichPage === 1} isActive={false}>
        <button disabled={whichPage === 1} onClick={() => props.setWhichPage(whichPage - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </PagginationElement>
    )

    showRightButton = (
      <PagginationElement isDisable={whichPage === totalSwitchNumber} isActive={false}>
        <button
          disabled={whichPage === totalSwitchNumber}
          onClick={() => props.setWhichPage(whichPage + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </PagginationElement>
    )
  }

  return (
    <PagginationWrapper>
      <PagginationList>
        {showLeftButton}
        {showPagginationElements}
        {showRightButton}
      </PagginationList>
    </PagginationWrapper>
  )
}
