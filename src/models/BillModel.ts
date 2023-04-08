import { EmptyFieldException } from 'src/util/EmptyFieldException'

export class NewFinance {
  id: string
  user: string
  name: string
  dueDate: string
  description: string
  value: number
  quantityAmount: number
  tags: Array<string>
  isCashEntry: boolean
  isBillPayed = false
  isToDivideValue = false

  constructor (
    Id: string,
    User: string,
    Name: string,
    DueDate: string,
    Description: string,
    Value: number,
    QuantityAmount: number,
    Tags: Array<string>,
    IsCashEntry: boolean,
    IsBillPayed: boolean,
    IsToDivideValue: boolean
  ) {
    /* if (typeof (Id) === 'undefined' || !Id) throw new EmptyFieldException('Id')
    else */
    if (typeof (Name) === 'undefined' || !Name) throw new EmptyFieldException('Nome da conta')
    else if (typeof (DueDate) === 'undefined' || !DueDate) throw new EmptyFieldException('Data de vencimento')
    else if (typeof (Value) === 'undefined' || !Value) throw new EmptyFieldException('Valor')
    else {
      this.id = Id
      this.user = User
      this.name = Name
      this.dueDate = DueDate
      this.description = Description
      this.value = Value
      this.quantityAmount = QuantityAmount || 1
      this.tags = Tags
      this.isCashEntry = IsCashEntry
      this.isBillPayed = IsBillPayed
      this.isToDivideValue = IsToDivideValue
    }
  }
}
