import i18n from 'src/util/i18n'

/**
 * Columns for 'Bills close to overdue' screen/view
 */
export function closeToOverdueColumns () {
  return [
    // {
    //   name: 'id', // API field
    //   required: false,
    //   label: i18n.global.t('columns.closeToOverdue.id'),
    //   align: 'left',
    //   sortable: false
    // },
    // {
    //   name: 'user', // API field
    //   required: false,
    //   label: i18n.global.t('columns.closeToOverdue.user'),
    //   align: 'left',
    //   sortable: true
    // },
    {
      name: 'name', // API field
      required: true,
      label: i18n.global.t('columns.closeToOverdue.name'),
      align: 'left',
      sortable: true

    },
    {
      name: 'dueDate', // API field
      required: true,
      label: i18n.global.t('columns.closeToOverdue.dueDate'),
      align: 'left',
      sortable: true

    },
    // {
    //   name: 'description', // API field
    //   required: false,
    //   label: i18n.global.t('columns.closeToOverdue.desc'),
    //   align: 'left',
    //   sortable: false

    // },
    {
      name: 'value', // API field
      required: true,
      label: i18n.global.t('columns.closeToOverdue.value'),
      align: 'left',
      sortable: true,
      format: val => `${i18n.global.t('generic.currencySymbol')} ${val}`
    }
    //, {
    //   name: 'quantityAmount', // API field
    //   required: false,
    //   label: i18n.global.t('columns.closeToOverdue.qtd'),
    //   align: 'left',
    //   sortable: false

    // },
    // {
    //   name: 'tags', // API field
    //   required: false,
    //   label: i18n.global.t('columns.closeToOverdue.tags'),
    //   align: 'left',
    //   sortable: false

    // },
    // {
    //   name: 'isCashEntry', // API field
    //   required: false,
    //   label: i18n.global.t('columns.closeToOverdue.isCashEntry'),
    //   align: 'left',
    //   sortable: false

    // },
    // {
    //   name: 'isBillPayed', // API field
    //   required: false,
    //   label: i18n.global.t('columns.closeToOverdue.isBillPayed'),
    //   align: 'left',
    //   sortable: false

    // },
    // {
    //   name: 'isToDivideValue', // API field
    //   required: false,
    //   label: i18n.global.t('columns.closeToOverdue.isToDivideValue'),
    //   align: 'left',
    //   sortable: false

    // }
  ]
}

export default { closeToOverdueColumns }
