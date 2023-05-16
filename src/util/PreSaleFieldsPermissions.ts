const fieldsForTemplate1 = [
  'productName',
  'imageId',
  'affiliateUrl',
  'backColor1',
  'backColor2',
  'buttonColor'
]

const fieldsForTemplate2 = [
  'productName',
  'imageId',
  'affiliateUrl',
  'backColor1',
  'backColor2',
  'buttonColor',
  'headLineText',
  'buttonText',
  'buttonChoice',
  'showButtonAnimation'
]

const fieldsForTemplate3 = [
  'productName',
  'imageId',
  'affiliateUrl',
  'backColor1',
  'backColor2',
  'buttonColor',
  'headLineText',
  'buttonText',
  'buttonChoice',
  'showButtonAnimation',
  'pageTitleText',
  'serverToHostPresell',
  'showDetailedInfo',
  'aboutProduct',
  'howDoesProductWork',
  'productIngredients',
  'showLastChanceToBuy',
  'showPromotionValues',
  'promotionValueBefore',
  'promotionValueWithDiscount',
  'discountValue'
]

export function shouldViewField (template: string[], fieldName: string) {
  // console.log(`1. template: '${template}' | fieldName: ${fieldName}`)
  // let returnValue = false
  if (template.includes('Template 1')) {
    return fieldsForTemplate1.includes(fieldName)
  } else if (template.includes('Template 2')) {
    return fieldsForTemplate2.includes(fieldName)
  } else if (template.includes('Template 3')) {
    return fieldsForTemplate3.includes(fieldName)
  }
  // console.log('2. returnValue: ', returnValue)
  // return returnValue
}
