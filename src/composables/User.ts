import { apiAuth, apiLogin, apiNewUser } from 'src/boot/axios'
import { User, UserLogin } from 'src/models/user'
import { useQuasar } from 'quasar'
import LoadingSpinner from './LoadingSpinner'
import notification from './Notification'
import { LoadingStatus } from 'src/models/status'

export default function user () {
  const $q = useQuasar()
  const { showLoading } = LoadingSpinner()
  // const notify = notification()

  const getUser = async (payload: UserLogin) => {
    showLoading(LoadingStatus.ON)

    return await apiLogin
      .post('user/login', payload)
      .then(async (response: any) => {
        showLoading(LoadingStatus.OFF)
        return response.data
      })
      .catch((error: any) => {
        showLoading(LoadingStatus.OFF)
        if (error) {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: error.response.data.message,
            icon: 'report_problem'
          })
        } else console.log('error on user.getUser(): ', error)
      })
  }

  const updateUser = async (payload: User) => {
    return await apiAuth
      .post('', payload)
      .then(async (response: any) => {
        return response.data
      })
      .catch((error: any) => {
        if (error) {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: error.response.data.message,
            icon: 'report_problem'
          })
        } else console.log('error on user.updateUser(): ', error)
      })
  }

  const newUser = async (payload: any) => {
    return await apiNewUser
      .post('user/new', payload)
      .then(async (response: any) => {
        return response.data
      })
      .catch((error: any) => {
        if (error) {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: error.response.data.message,
            icon: 'report_problem'
          })
        } else console.log('error on user.newUser(): ', error)
      })
  }

  const deleteUser = async (payload: any) => {
    return await apiAuth
      .delete('')
      .then(async (response: any) => {
        return response.data
      })
      .catch((error: any) => {
        if (error) {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: error.response.data.message,
            icon: 'report_problem'
          })
        } else console.log('error on user.deleteUser(): ', error)
      })
  }

  return {
    getUser,
    updateUser,
    newUser,
    deleteUser
  }
}
