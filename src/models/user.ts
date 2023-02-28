export class User {
  id: string
  user: string | undefined
  userName: string
  password: string
  email: string
  loggedIn: boolean
  active: boolean
  createdOn: string | undefined
  lastLoginOn: string | undefined
  permissions: string[] | undefined
  enablePayedFunctions: boolean

  public constructor (User: string | undefined, UserName: string, Pass: string, Email: string, Logged: boolean, Active: boolean, EnablePaidFunc: boolean, Id?: string) {
    this.user = User
    this.userName = UserName
    this.password = Pass
    this.email = Email
    this.loggedIn = Logged
    this.active = Active
    this.enablePayedFunctions = EnablePaidFunc
    this.id = Id || ''
  }
}

export class UserLogin {
  userLogin: string
  password: string

  constructor (UserLogin: string, Password: string) {
    this.userLogin = UserLogin
    this.password = Password
  }
}
