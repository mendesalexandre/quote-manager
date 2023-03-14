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
      return response.data
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
    .then(async (response: any) => {
      return response.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

/**
 * Get bills pay payed status (true or false)
 */
export async function getBillsNotPayed (payload) {
  return await apiAuth
    .get('bill/payed/false')
    .then(async (response: any) => {
      return response.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default { getBills, getBillsCloseToOverdue }
