import { apiAuth } from 'src/boot/axios'
import { PresellNew } from 'src/models/PresellModel'

export async function newPresell (payload: PresellNew) {
  return await apiAuth
    .post('affiliate/pre-sell/new/', payload)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function getPresell (payload: any) {
  return await apiAuth
    .get('affiliate/pre-sell/list', {
      params: {
        status: payload?.status || '',
        productName: payload?.productName || ''
      }
    })
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default { newPresell, getPresell }
