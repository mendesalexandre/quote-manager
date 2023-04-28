export interface NewFinance {
  id: string
  /**
   * Name of the bill
   */
  name: string
  dueDate: string
  description: string
  value: number
  quantityAmount: number
  tags: Array<string>
  isCashEntry: boolean
  isBillPayed: boolean
  isToDivideValue: boolean
}
