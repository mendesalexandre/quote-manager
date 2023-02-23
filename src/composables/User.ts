import { apiLogin, apiNewUser } from 'src/boot/axios'
import { UserLogin } from 'src/models/user'
import { useQuasar } from 'quasar'

export default function user () {
  const $q = useQuasar()
  const getUser = async (payload: UserLogin) => {
    return await apiLogin
      .post('user/login', payload)
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
        } else console.log('error on user.getUser(): ', error)
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

  return {
    getUser,
    newUser
  }
}
