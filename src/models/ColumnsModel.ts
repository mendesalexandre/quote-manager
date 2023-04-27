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
    // { name: 'description', label: i18n.global.t('components.lbl.desc'), sortable: false },
    { name: 'value', field: 'value', label: i18n.global.t('columns.closeToOverdue.value'), sortable: true, format: val => `${i18n.global.t('generic.currencySymbol')} ${val}` },
    { name: 'actions', label: i18n.global.t('components.lbl.actions'), sortable: false, align: 'center' }
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
    { name: 'actions', label: i18n.global.t('components.lbl.actions'), sortable: false, align: 'center' }
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
    { name: 'actions', field: 'action', label: i18n.global.t('components.lbl.actions'), sortable: false, align: 'right' }
  ]
}

/**
 * Columns for 'User history' screen/view
 */
export function userHistoryColumns () {
  return [
    { name: 'createdOn', field: 'createdOn', label: i18n.global.t('columns.history.eventDate'), sortable: true, align: 'right' },
    { name: 'action', field: 'action', required: true, label: i18n.global.t('columns.history.action'), sortable: true, align: 'left' },
    { name: 'description', field: 'description', label: i18n.global.t('components.lbl.desc'), sortable: true, align: 'left' }
  ]
}

/*
 * Columns for 'Pre sale' screen/view
 */
export function preSellColumns () {
  return [
    { name: 'status', field: 'status', label: i18n.global.t('columns.presell.status'), sortable: true, align: 'left' },
    { name: 'productName', field: 'productName', required: true, label: i18n.global.t('columns.presell.productName'), sortable: true, align: 'left' },
    { name: 'finalUrl', field: 'finalUrl', required: true, label: i18n.global.t('columns.presell.finalUrl'), sortable: true, align: 'left' },
    { name: 'actions', field: 'action', label: i18n.global.t('components.lbl.actions'), sortable: false, align: 'right' }
  ]
}

/*
 * Columns for 'Defaulters' screen/view
 */
export function defaultersColumns () {
  return [
    { name: 'status', field: 'status', label: i18n.global.t('columns.defaulter.status'), sortable: true, align: 'left' },
    { name: 'name', field: 'name', required: true, label: i18n.global.t('columns.defaulter.name'), sortable: true, align: 'left' },
    { name: 'totalValue', field: 'totalValue', required: true, label: i18n.global.t('columns.defaulter.totalValue'), sortable: true, align: 'left' },
    { name: 'lastUpdateOn', field: 'lastUpdateOn', required: true, label: i18n.global.t('columns.defaulter.lastUpdateOn'), sortable: true, align: 'left' },
    { name: 'actions', field: 'action', label: i18n.global.t('components.lbl.actions'), sortable: false, align: 'right' }
  ]
}

/*
 * Columns for 'Defaulters child table (expand row)'
 */
export function defaultersChildColumns () {
  return [
    { name: 'desc', field: 'description', label: i18n.global.t('components.lbl.desc'), sortable: false, align: 'left' },
    { name: 'value', field: 'value', label: i18n.global.t('columns.defaulter.value'), sortable: false, align: 'left', format: val => `${i18n.global.t('generic.currencySymbol')} ${val}` },
    { name: 'type', field: 'type', label: i18n.global.t('columns.defaulter.type'), sortable: false, align: 'left' },
    { name: 'createdOn', field: 'createdOn', label: i18n.global.t('columns.defaulter.createdOn'), sortable: false, align: 'left' }
  ]
}

export default {
  closeToOverdueColumns,
  notPaidColumns,
  myBillsColumns,
  userHistoryColumns,
  preSellColumns,
  defaultersColumns,
  defaultersChildColumns
}
