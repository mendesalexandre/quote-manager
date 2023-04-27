export interface DefaulterNew {
  name: string
  status: string
  totalValue: number
  payments: []
  history: []
}

export interface DefaulterAddDebt {
  description: string
  value: number
  // eslint-disable-next-line no-use-before-define
  type: DefDebtType
  payByInstallments: boolean
  quantity: number
}

export interface DefaulterSubDebt {
  description: string
  value: number
}

export enum DefDebtType {
  DEBTOR,
  CREDITOR
}
