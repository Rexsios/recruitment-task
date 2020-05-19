export interface CompaniesData {
  id: number
  name: string
  city: string
}

export interface SingleIncomesData {
  value: string
  date: Date
}

export interface IncomesData {
  id: number
  incomes: [SingleIncomesData]
}

export interface CompaniesAndIncomesData extends CompaniesData {
  totalIncomes: number
  avarageIncomes: number
  lastMonthIncome: number
}
