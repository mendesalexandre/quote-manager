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

export async function deletePresell (payload: any) {
  return await apiAuth
    .delete(`affiliate/pre-sell/delete/${payload}`)
    .then((response: any) => {
      return response.data.message
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function updatePresell (payload: any) {
  return await apiAuth
    .post(`affiliate/pre-sell/update/${payload.id}`, payload)
    .then((response: any) => {
      return response.data.message
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default { newPresell, getPresell, deletePresell, updatePresell }
