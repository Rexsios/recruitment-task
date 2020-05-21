import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons'
import { WhichColumn, ChevronType } from '../../../Types/Enums/EnumsList'

interface IDetailProps {
  name: string
  id: WhichColumn
  handleButton: (id: WhichColumn) => void
  chevronType: ChevronType
  loading: boolean
}

export const SingleHeader: React.FC<IDetailProps> = (props) => {
  const { name, id, chevronType, loading } = props
  let chevronTypeShow = <FontAwesomeIcon icon={faMinus} />
  if (chevronType === ChevronType.ASCENDING)
    chevronTypeShow = <FontAwesomeIcon icon={faChevronDown} />
  else if (chevronType === ChevronType.DESCENDING)
    chevronTypeShow = <FontAwesomeIcon icon={faChevronUp} />
  return (
    <th>
      <button onClick={() => props.handleButton(id)} disabled={loading}>
        <div>
          <p>{name}</p>
          {chevronTypeShow}
        </div>
      </button>
    </th>
  )
}
