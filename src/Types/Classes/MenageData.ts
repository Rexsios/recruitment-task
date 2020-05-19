import { SingleIncomesData } from '../Inferaces/ListOfInterfaces'

export default class WorkoutMethods {
  static countNecceseryValues = (incomesTable: SingleIncomesData[]) => {
    let totalValue = 0
    let lastMonthValue = 0
    let counter = 0
    let minDate = new Date()
    minDate.setMonth(minDate.getMonth() - 1)

    incomesTable.forEach((singleIncome, i) => {
      totalValue += parseFloat(singleIncome.value)
      let dateFromRepo = new Date(singleIncome.date)

      if (minDate < dateFromRepo) {
        lastMonthValue += parseFloat(singleIncome.value)
      }
      counter = i
    })
    let avarageValue = totalValue / counter
    return {
      totalValue: totalValue,
      avarageValue: avarageValue,
      lastMonthValue: lastMonthValue,
    }
  }

  static countSumOfLastMonthValue = (incomesTable: SingleIncomesData[]) => {}
}
