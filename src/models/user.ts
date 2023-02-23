export class User {
  user: string
  userName: string
  password: string
  email: string
  loggedIn: boolean
  active: boolean
  enablePayedFunctions: boolean

  constructor (User: string, UserName: string, Pass: string, Email: string, Logged: boolean, Active: boolean, EnablePaidFunc: boolean) {
    this.user = User
    this.userName = UserName
    this.password = Pass
    this.email = Email
    this.loggedIn = Logged
    this.active = Active
    this.enablePayedFunctions = EnablePaidFunc
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
