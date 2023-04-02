export class NewFinance {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    user: string,
    /**
     * Bill name
     */
    name: string,
    dueDate: string,
    description: string,
    value: number,
    quantityAmount: number,
    tags: Array<string>,
    isCashEntry: boolean,
    isBillPayed: boolean,
    isToDivideValue: boolean
  ) {}
}
