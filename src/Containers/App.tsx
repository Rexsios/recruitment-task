import React, { Component } from 'react'
import { Table } from '../Components/Table/Table'
import axios from 'axios'
import {
  CompaniesData,
  IncomesData,
  CompaniesAndIncomesData,
} from '../Types/Inferaces/ListOfInterfaces'
import ManageData from '../Types/Classes/MenageData'

interface IDetailPropss {}

interface IDetailState {
  data: string[]
}
export default class App extends Component {
  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    let tableWithDataToSend: CompaniesAndIncomesData[] = []
    let length = 0
    axios
      .get<[CompaniesData]>('https://recruitment.hal.skygate.io/companies')
      .then((companiesResponse) => {
        length = companiesResponse.data.length
        companiesResponse.data.forEach((item, i) => {
          axios
            .get<IncomesData>(`https://recruitment.hal.skygate.io/incomes/${item.id}`)
            .then((incomesResponse) => {
              const { totalValue, avarageValue, lastMonthValue } = ManageData.countNecceseryValues(
                incomesResponse.data.incomes
              )

              const newObjectToTable: CompaniesAndIncomesData = {
                id: item.id,
                name: item.name,
                city: item.city,
                totalIncomes: totalValue,
                avarageIncomes: avarageValue,
                lastMonthIncome: lastMonthValue,
              }
              tableWithDataToSend.push(newObjectToTable)

              if (i === length - 1) this.setState({ data: tableWithDataToSend, loading: false })
            })
        })
      })
      .catch((error) => {})
  }

  render() {
    return <Table data={this.state.data} loading={this.state.loading} />
  }
}
