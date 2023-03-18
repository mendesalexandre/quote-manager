/**
 * Represents an user
 */
export interface User {
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
}

/**
 * User login
 */
export interface UserLogin {
  userLogin: string
  password: string
  automaticLogin: boolean
}

/**
 * Represents a new user that will be registered
 */
export class UserNew {
  /**
   * User login
   */
  user: string
  /**
   * User name
   */
  userName: string
  /**
   * Password
   */
  password: string
  /**
   * Email
   */
  email: string
  /**
   * If the user is logged in
   */
  loggedIn: boolean
  /**
   * User active?
   */
  active: boolean
  /**
   * User plan
   */
  // eslint-disable-next-line no-use-before-define
  userPlan: UserPlan

  // eslint-disable-next-line no-use-before-define
  constructor (User: string, UserName: string, Password: string, Email: string, Logged: boolean, Active: boolean, UserPlan: UserPlan.FREE) {
    this.user = User
    this.userName = UserName
    this.password = Password
    this.email = Email
    this.loggedIn = Logged
    this.active = Active
    this.userPlan = UserPlan
  }
}

/**
 * User plan
 */
export enum UserPlan {
  FREE = 'FREE',
  PLUS = 'PLUS',
  BUSINESS = 'BUSINESS',
  ENTERPRISE = 'ENTERPRISE'
}

/**
 * User to update
 */
export interface UserUpdate {
  newUserName: string
  oldUserName: string
  newEmail: string
  oldEmail: string
  oldPassword: string
  newPassword: string
}
