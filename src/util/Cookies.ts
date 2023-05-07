import { Cookies } from 'quasar'

/**
 * Get an existing cookie store in browser.
 * @param key Key name.
 * @returns Returns a value if the key exist, empty string if didn't found the key.
 */
export function get (key: string) {
  if (Cookies.has(key)) {
    return Cookies.get(key)
  } else return ''
}

/**
 * Set a cookie into the device.
 * @param key Name of the key.
 * @param value Value of the key.
 * @returns True in case of success.
 */
export function add (key: string, value: string) {
  if (!Cookies.has(key)) {
    Cookies.set(key, value)
    return true
  } else return false
}

/**
 * Validate if has cookies.
 * @returns True if have at least, one cookie
 */
export function hasCookies () {
  return Cookies.getAll() !== undefined
}

/**
 * Clear all cookies stored
 * @returns True in case of success.
 */
export function clear () {
  const allCookies = Cookies.getAll()
  if (allCookies) {
    for (const c in allCookies) {
      if (Object.prototype.hasOwnProperty.call(allCookies, c)) {
        // do stuff
        Cookies.remove(c)
      }
    }
    return true
  } else return false
}

export default { get, add, clear, hasCookies }
