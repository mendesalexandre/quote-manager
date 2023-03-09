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

export interface UserLogin {
  userLogin: string
  password: string
  automaticLogin: boolean
}

export interface UserNew {
  user: string
  userName: string
  password: string
  email: string
  loggedIn: boolean
  active: boolean
  // eslint-disable-next-line no-use-before-define
  userPlan: UserPlan
}

export enum UserPlan {
  FREE = 'FREE',
  PLUS = 'PLUS',
  BUSINESS = 'BUSINESS',
  ENTERPRISE = 'ENTERPRISE'
}

export interface UserUpdate {
  newUserName: string
  oldUserName: string
  newEmail: string
  oldEmail: string
  oldPassword: string
  newPassword: string
}
