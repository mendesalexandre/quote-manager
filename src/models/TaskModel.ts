export interface TaskNew {
  name: string
  description: string
  // eslint-disable-next-line no-use-before-define
  status: TaskStatus
  blockReason: string
}

export enum TaskStatus {
  TODO, BLOCKED, DONE
}
