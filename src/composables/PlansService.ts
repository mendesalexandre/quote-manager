import { apiAuth } from 'src/boot/axios'

export async function getPlans () {
  return await apiAuth
    .get('user/plans')
    .then(async (response: any) => {
      return response.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default { getPlans }
