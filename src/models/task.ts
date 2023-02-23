export class Task {
  title: string
  completed: boolean
  id: number

  constructor (Id: number, Title: string, Completed: boolean) {
    this.id = Id
    this.title = Title
    this.completed = Completed
  }
}
