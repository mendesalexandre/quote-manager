import { apiAuth } from 'src/boot/axios'
import { TaskNew } from 'src/models/TaskModel'

/**
 * Get all bills
 */
export async function registerNewTask (payload: TaskNew) {
  return await apiAuth
    .post('tasks/new/', payload)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}
