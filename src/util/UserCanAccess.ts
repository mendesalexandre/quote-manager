import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { get } from './Cookies'
import { decrypt } from './Encrypt'

/**
 * Validate if the user has access to a resource
 * @param to What is the path the user is trying to access
 * @param from What is the path the user is coming from
 * @param next Object to continue navigation
 * @returns True in case of user have access, false otherwise.
 */
export function userHasAccess (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const cookie = get('permissions')
  const decryptCookie = decrypt(cookie)
  const permissions = JSON.parse(decryptCookie)
  const destination = to.name?.toString() || ''
  // console.log('permissions: ', permissions)
  // console.log('permissions type: ', typeof (permissions))
  // console.log('destination: ', destination.toUpperCase())

  if (to.name === undefined) next() // First access
  else if (permissions.length > 0 && destination !== '') {
    const hasPermission = permissions
      .filter(p => p.name.toUpperCase().trim() === destination.toUpperCase().trim())
      .map((p) => p.hasAccess)
    if (hasPermission) next()
    else return false
  } else return false
}

export default { userHasAccess }
