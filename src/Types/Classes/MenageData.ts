import { SingleIncomesData, CompaniesAndIncomesData } from '../Inferaces/ListOfInterfaces'
import { WhichColumn } from '../Enums/EnumsList'

export default class MenageData {
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

  static filterData = (
    data: CompaniesAndIncomesData[],
    whichButton: WhichColumn,
    reverse: boolean = false
  ) => {
    switch (whichButton) {
      case WhichColumn.ID:
        return MenageData.filterById(data, reverse)
      case WhichColumn.NAME:
        return MenageData.filterByName(data, reverse)
      case WhichColumn.CITY:
        return MenageData.filterByCity(data, reverse)
      case WhichColumn.TOTALINCOMES:
        return MenageData.filterByTotalIncomes(data, reverse)
      case WhichColumn.AVARAGEINCOMES:
        return MenageData.filterByAvarageIncomes(data, reverse)
      case WhichColumn.LASTMONTHINCOMES:
        return MenageData.filterByLastMonthIncomes(data, reverse)
      default:
        return data
    }
  }

  static filterById = (data: CompaniesAndIncomesData[], reverse: boolean) => {
    if (reverse) return [...data.sort((a, b) => (a.id > b.id ? -1 : 1))]
    else return [...data.sort((a, b) => (a.id > b.id ? 1 : -1))]
  }

  static filterByName = (data: CompaniesAndIncomesData[], reverse: boolean) => {
    if (reverse) return [...data.sort((a, b) => (a.name > b.name ? -1 : 1))]
    else return [...data.sort((a, b) => (a.name > b.name ? 1 : -1))]
  }

  static filterByCity = (data: CompaniesAndIncomesData[], reverse: boolean) => {
    if (reverse) return [...data.sort((a, b) => (a.city > b.city ? -1 : 1))]
    else return [...data.sort((a, b) => (a.city > b.city ? 1 : -1))]
  }

  static filterByTotalIncomes = (data: CompaniesAndIncomesData[], reverse: boolean) => {
    if (reverse) return [...data.sort((a, b) => (a.totalIncomes > b.totalIncomes ? -1 : 1))]
    else return [...data.sort((a, b) => (a.totalIncomes > b.totalIncomes ? 1 : -1))]
  }

  static filterByAvarageIncomes = (data: CompaniesAndIncomesData[], reverse: boolean) => {
    if (reverse) return [...data.sort((a, b) => (a.avarageIncomes > b.avarageIncomes ? -1 : 1))]
    else return [...data.sort((a, b) => (a.avarageIncomes > b.avarageIncomes ? 1 : -1))]
  }

  static filterByLastMonthIncomes = (data: CompaniesAndIncomesData[], reverse: boolean) => {
    if (reverse) return [...data.sort((a, b) => (a.lastMonthIncome > b.lastMonthIncome ? -1 : 1))]
    else return [...data.sort((a, b) => (a.lastMonthIncome > b.lastMonthIncome ? 1 : -1))]
  }

  static filterByInputValue = (data: CompaniesAndIncomesData[], inputValue: string) => {
    return data.filter((singleData) => {
      if (
        singleData.id.toString().includes(inputValue) ||
        singleData.name.toLowerCase().includes(inputValue) ||
        singleData.city.toLowerCase().includes(inputValue) ||
        singleData.totalIncomes.toFixed(0).toString().includes(inputValue) ||
        singleData.avarageIncomes.toFixed(0).toString().includes(inputValue) ||
        singleData.lastMonthIncome.toFixed(0).toString().includes(inputValue)
      )
        return true
    })
  }
}
