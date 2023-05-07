import { LocalStorage } from 'quasar'

/**
 * Get the local variable value
 * @param key Key in local storage
 * @returns String with content
 */
export function get (key: string) {
  return LocalStorage.getItem(key)
}

/**
 * Save new values into local storage
 * @param key Key to save
 * @param value Value
 * @param isSensitiveData Is a sensitive data
 */
export function add (key: string, value: string, isSensitiveData = false) {
  LocalStorage.set(key, value)
}

/**
 * Clear all keys into local storage
 */
export function clearAll () {
  const keys = LocalStorage.getAll()
  keys.map((k) => LocalStorage.remove(k))
}

export default { get, add, clearAll }
