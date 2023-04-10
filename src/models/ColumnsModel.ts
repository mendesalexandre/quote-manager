import i18n from 'src/util/i18n'

/**
 * Columns for 'Bills close to overdue' screen/view
 */
export function closeToOverdueColumns () {
  return [
    // { name: 'id', label: i18n.global.t('columns.closeToOverdue.id'), sortable: false },
    // { name: 'user', label: i18n.global.t('columns.closeToOverdue.user'), sortable: true },
    {
      name: 'name',
      field: 'name',
      required: true,
      label: i18n.global.t('columns.closeToOverdue.name'),
      sortable: true
    },
    { name: 'dueDate', field: 'dueDate', label: i18n.global.t('columns.closeToOverdue.dueDate'), sortable: true },
    // { name: 'description', label: i18n.global.t('columns.closeToOverdue.desc'), sortable: false },
    { name: 'value', field: 'value', label: i18n.global.t('columns.closeToOverdue.value'), sortable: true, format: val => `${i18n.global.t('generic.currencySymbol')} ${val}` },
    { name: 'actions', label: i18n.global.t('columns.closeToOverdue.actions'), sortable: false, align: 'center' }
    // { name: 'quantityAmount', label: i18n.global.t('columns.closeToOverdue.qtd'), sortable: false },
    // { name: 'tags', label: i18n.global.t('columns.closeToOverdue.tags'), sortable: false },
    // { name: 'isCashEntry', label: i18n.global.t('columns.closeToOverdue.isCashEntry'), sortable: false },
    // { name: 'isBillPayed', label: i18n.global.t('columns.closeToOverdue.isBillPayed'), sortable: false },
    // { name: 'isToDivideValue', label: i18n.global.t('columns.closeToOverdue.isToDivideValue'), sortable: false }
  ]
}

/**
 * Columns for 'Bills not paid' screen/view
 */
export function notPaidColumns () {
  return [
    {
      name: 'name',
      field: 'name',
      required: true,
      label: i18n.global.t('columns.notPaid.name'),
      sortable: true,
      align: 'left'
    },
    { name: 'dueDate', field: 'dueDate', label: i18n.global.t('columns.notPaid.dueDate'), sortable: true, align: 'left' },
    { name: 'value', field: 'value', label: i18n.global.t('columns.notPaid.value'), sortable: true, format: val => `${i18n.global.t('generic.currencySymbol')} ${val}`, align: 'left' },
    { name: 'actions', label: i18n.global.t('columns.notPaid.actions'), sortable: false, align: 'center' }
  ]
}

/**
 * Columns for 'Bills to pay' screen/view
 */
export function myBillsColumns () {
  return [
    {
      name: 'name',
      field: 'name',
      required: true,
      label: i18n.global.t('columns.notPaid.name'),
      sortable: true,
      align: 'left'
    },
    { name: 'dueDate', field: 'dueDate', label: i18n.global.t('columns.bills.dueDate'), sortable: true, align: 'left' },
    { name: 'value', field: 'value', label: i18n.global.t('columns.bills.value'), sortable: true, format: val => `${i18n.global.t('generic.currencySymbol')} ${val}`, align: 'left' },
    { name: 'actions', field: 'action', label: i18n.global.t('columns.bills.actions'), sortable: false, align: 'right' }
  ]
}

export default { closeToOverdueColumns, notPaidColumns, myBillsColumns }
