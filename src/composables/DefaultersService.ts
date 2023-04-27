import { apiAuth } from 'src/boot/axios'

/**
 * Get all defaulters
 */
export async function getDefaulters (payload: any) {
  return await apiAuth
    .get('defaulters/list/', {
      params: {
        name: payload?.name || '',
        desc: payload?.desc || ''
      }
    })
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function newDefaulter (payload: any) {
  return await apiAuth
    .post('defaulters/new', payload)
    .then((response: any) => {
      return response.data.message
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function addValueDebt (payload: any) {
  return await apiAuth
    .post('defaulters/add', payload)
    .then((response: any) => {
      return response.data.message
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function subtractValueDebt (payload: any) {
  return await apiAuth
    .post('defaulters/subtract', payload)
    .then((response: any) => {
      return response.data.message
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default {
  getDefaulters,
  newDefaulter,
  addValueDebt,
  subtractValueDebt
}
