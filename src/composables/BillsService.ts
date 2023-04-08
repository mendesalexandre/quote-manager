import { apiAuth } from 'src/boot/axios'

/**
 * Get all bills
 */
export async function getBills (payload: any) {
  return await apiAuth
    .get('bill/list/', {
      params: {
        month: payload?.month || '',
        year: payload?.year || '',
        description: payload?.description || '',
        tag: payload?.tag || ''
      }
    })
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

/**
 * Get bills that is close to overdue
 */
export async function getBillsCloseToOverdue () {
  return await apiAuth
    .get('bill/close-to-overdue')
    .then((response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

/**
 * Get bills pay payed status (true or false)
 */
export async function getBillsNotPayed () {
  return await apiAuth
    .get('bill/payed/false')
    .then((response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function newBill (payload: any) {
  return await apiAuth
    .post('bill/new', payload)
    .then((response: any) => {
      return response.data.message
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default { getBills, getBillsCloseToOverdue, getBillsNotPayed }
