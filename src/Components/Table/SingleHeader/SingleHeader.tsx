import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

interface IDetailProps {
  name: string
  id: number
}

export const SingleHeader: React.FC<IDetailProps> = (props) => {
  const { name } = props
  return (
    <th>
      <button>
        <div>
          <p>{name}</p>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </button>
    </th>
  )
}
