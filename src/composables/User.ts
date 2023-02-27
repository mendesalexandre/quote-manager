import { apiAuth, apiLogin, apiNewUser } from 'src/boot/axios'
import { User, UserLogin } from 'src/models/user'
import { showLoading } from '../util/Loading'
import { notifySuccess, notifyError } from '../util/Notification'
import { LoadingStatus } from 'src/models/status'

export async function getUser (payload: UserLogin) {
  showLoading(LoadingStatus.ON)

  return await apiLogin
    .post('user/login', payload)
    .then(async (response: any) => {
      showLoading(LoadingStatus.OFF)
      notifySuccess('Sucesso ao logar')
      return response.data
    })
    .catch((error: any) => {
      showLoading(LoadingStatus.OFF)
      notifyError(error?.message)
      return error
    })
}

export async function updateUser (payload: User) {
  return await apiAuth
    .post('', payload)
    .then(async (response: any) => {
      return response.data
    })
    .catch((error: any) => {
      if (error) {
        notifyError(error.response.data.message)
      } else console.log('error on user.updateUser(): ', error)
    })
}

export async function newUser (payload: any) {
  return await apiNewUser
    .post('user/new', payload)
    .then(async (response: any) => {
      return response.data
    })
    .catch((error: any) => {
      if (error) {
        notifyError(error.response.data.message)
      } else console.log('error on user.newUser(): ', error)
    })
}

export async function deleteUser (payload: any) {
  return await apiAuth
    .delete('')
    .then(async (response: any) => {
      return response.data
    })
    .catch((error: any) => {
      if (error) {
        notifyError(error.response.data.message)
      } else console.log('error on user.deleteUser(): ', error)
    })
}

export default { getUser, updateUser, newUser, deleteUser }
