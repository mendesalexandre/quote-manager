import { apiAuth } from 'src/boot/axios'

export async function registerNewTip (payload) {
  return await apiAuth
    .post('tips/new/', payload)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function getTips (payload) {
  return await apiAuth
    .get('tips/list/' /* {
      params: {
        status: payload?.status || '',
        productName: payload?.productName || ''
      }
    } */)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default {
  registerNewTip
}
