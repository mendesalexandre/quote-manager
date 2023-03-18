import { registerNewTask } from 'src/composables/TasksService'
import { TaskNew } from 'src/models/TaskModel'
import { showLoading } from 'src/util/Loading'
import { notifySuccess, notifyError } from 'src/util/Notification'
import { LoadingStatus } from 'src/models/StatusModel'
import i18n from 'src/util/i18n'

/**
 * Do user login with credentials informed.
 * @param payload User login object
 * @returns User object or error
 */
export async function newTask (payload: TaskNew) {
  try {
    showLoading(LoadingStatus.ON)
    const task = await registerNewTask(payload)
    showLoading(LoadingStatus.OFF)
    notifySuccess(i18n.global.t('msg.task.newSuccess'))
    return task
  } catch (error: any) {
    showLoading(LoadingStatus.OFF)
    notifyError(error)
  }
}

export default { newTask }
