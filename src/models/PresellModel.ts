export interface PresellNew {
  productName: string
  pageTitleText: string
  headLineText: string
  buttonText: string
  backGradientColor1: string
  backGradientColor2: string
  buttonColor: string
  showLastOffer: boolean
  showGradientBackground: boolean
  showAnimationOverButton: boolean
}

export enum PresellStatus {
  TO_BE_CREATED,
  TO_BE_UPDATED,
  CREATING,
  CREATED,
  ALL
}
