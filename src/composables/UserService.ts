import { apiAuth, apiLogin, apiNewUser } from 'src/boot/axios'
import { UserLogin, UserUpdate } from 'src/models/UserModel'

export async function getUser (payload: UserLogin) {
  return await apiLogin
    .post('user/login', payload)
    .then(async (response: any) => {
      return response.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function updateUser (payload: UserUpdate) {
  return await apiAuth
    .post('user/update', payload)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function newUser (payload: any) {
  return await apiNewUser
    .post('user/new', payload)
    .then(async (response: any) => {
      return response.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function deleteUser (payload: any) {
  return await apiAuth
    .delete('') // TODO: Need implement this endpoint
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function getUserHistory () {
  return await apiAuth
    .get('user/history')
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default { getUser, updateUser, newUser, deleteUser, getUserHistory }
