import React from 'react'
import { CompaniesAndIncomesData } from '../../../Types/Inferaces/ListOfInterfaces'

interface IDetailProps {
  singleData: CompaniesAndIncomesData
}

export const SingleRow: React.FC<IDetailProps> = (props) => {
  const { id, name, city, totalIncomes, avarageIncomes, lastMonthIncome } = props.singleData
  //   let show = null
  //   show = Object.values(props.singleData).map((item) =>{} <td>{item}</td>)
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{city}</td>
      <td>{totalIncomes.toFixed(0)}</td>
      <td>{avarageIncomes.toFixed(0)}</td>
      <td>{lastMonthIncome.toFixed(0)}</td>
    </tr>
  )
}
