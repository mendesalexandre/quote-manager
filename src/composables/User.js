import { api } from 'src/boot/axios'

export default function user () {
  const getUser = async (payload) => {
    return await api
      .get('user/login', payload)
      .then(async (response) => {
        return response.data
      })
      .catch((error) => {
        if (error) throw error.response.data.message
      })
  }

  const newUser = async (payload) => {
    return await api
      .post('user/new', payload)
      .then(async (response) => {
        return response.data
      })
      .catch((error) => {
        throw error.response?.data?.message ?? 'Asasuahusha'
      })
  }

  return {
    getUser,
    newUser
  }
}
