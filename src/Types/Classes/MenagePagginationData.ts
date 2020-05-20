import { CompaniesAndIncomesData } from '../Inferaces/ListOfInterfaces'

export default class MenageData {
  static sliceData(data: CompaniesAndIncomesData[], whichPage: number, howManyItemsOnSite: number) {
    const dataLength = data.length
    let end = howManyItemsOnSite * whichPage
    if (whichPage * howManyItemsOnSite > dataLength) end = dataLength

    whichPage--
    const start = whichPage * howManyItemsOnSite
    return data.slice(start, end)
  }

  static setUpSmallNumberSwitches = (totalSwichNumber: number) => {
    const smallNumbers = []
    if (totalSwichNumber >= 5) totalSwichNumber = 5
    for (let i = 1; i < totalSwichNumber + 1; i++) {
      smallNumbers.push(i)
    }
    return [...smallNumbers]
  }

  static generateNewSmallNumbers = (number: number, totalSwitchNumber: number) => {
    if (number + 1 === totalSwitchNumber) number--
    else if (number === totalSwitchNumber) number = number - 2
    const smallNumbers = []
    for (let i = -2; i < 3; i++) {
      smallNumbers.push(number + i)
    }
    return [...smallNumbers]
  }
}
