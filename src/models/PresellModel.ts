export interface PresellNew {
  // Template 1 - available fields
  productName: string
  imageId: string
  affiliateUrl: string

  backColor1: string
  backColor2: string
  buttonColor: string

  // Template 2 - available fields
  headLineText: string
  buttonText: string
  buttonChoice: 'image' | 'text'
  showButtonAnimation: boolean

  // Template 3 - available fields
  pageTitleText: string
  serverToHostPresell: string
  showDetailedInfo: boolean
  aboutProduct: string
  howDoesProductWork: string
  productIngredients: string
  showLastChanceToBuy: boolean
  showPromotionValues: boolean
  promotionValueBefore: number
  promotionValueWithDiscount: number
  discountValue: number
  // Other definitions
  template: string[]
  id: string
}

export enum PresellStatus {
  TO_BE_CREATED,
  TO_BE_UPDATED,
  CREATING,
  CREATED,
  ALL
}
