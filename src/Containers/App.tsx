import React from 'react'
import { Table } from '../Components/Table/Table'
import axios from 'axios'
import {
  CompaniesData,
  IncomesData,
  CompaniesAndIncomesData,
} from '../Types/Inferaces/ListOfInterfaces'
import ManageData from '../Types/Classes/MenageData'
import { MessageType } from '../Types/Enums/EnumsList'

interface IDetailState {
  dataToSend?: CompaniesAndIncomesData[]
  loading?: boolean
  messageType?: {
    text: string
    type: MessageType
  } | null
  isMessageBoxVisible?: boolean
}
export default class App extends React.Component<IDetailState> {
  state = {
    dataToSend: [],
    loading: true,
    messageType: null,
    isMessageBoxVisible: false,
  }

  async componentDidMount() {
    try {
      let companiesResponse = await axios.get<[CompaniesData]>(
        'https://recruitment.hal.skygate.io/companies'
      )
      try {
        const data = companiesResponse.data
        const ProArray = data.map((item) =>
          axios.get<IncomesData>(`https://recruitment.hal.skygate.io/incomes/${item.id}`)
        )
        const AllProAray = await Promise.all(ProArray).then((data) =>
          data.map((single) => single.data)
        )

        const tableWithDataToSend = AllProAray.map((item, i) => {
          const { totalValue, avarageValue, lastMonthValue } = ManageData.countNecceseryValues(
            item.incomes
          )
          return {
            id: companiesResponse.data[i].id,
            name: companiesResponse.data[i].name,
            city: companiesResponse.data[i].city,
            totalIncomes: totalValue,
            avarageIncomes: avarageValue,
            lastMonthIncome: lastMonthValue,
          }
        })
        this.setState({
          dataToSend: tableWithDataToSend,
          loading: false,
          messageType: {
            text: 'Loading complete',
            type: MessageType.GOOD,
          },
          isMessageBoxVisible: true,
        })
        setTimeout(() => {
          this.setState({ isMessageBoxVisible: false })
        }, 3000)
      } catch (e) {
        this.handleErrorCase()
      }
    } catch (e) {
      this.handleErrorCase()
    }
  }

  handleErrorCase = () => {
    this.setState({
      loading: false,
      messageType: { text: 'Loading error', type: MessageType.BAD },
      isMessageBoxVisible: true,
    })
  }

  render() {
    return (
      <Table
        data={this.state.dataToSend}
        loading={this.state.loading}
        messageType={this.state.messageType}
        isMessageBoxVisible={this.state.isMessageBoxVisible}
      />
    )
  }
}
