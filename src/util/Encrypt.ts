import * as CryptoJS from 'crypto-js'
import { environment } from 'src/environments/environment'

/**
 * Function to encrypt a data into string
 */
export function encrypt (data: any) {
  try {
    return CryptoJS.AES.encrypt(JSON.stringify(data), environment.cipher.enc.toString()).toString()
  } catch (e) {
    console.log('Error during encrypt: ', e)
  }
}

/**
 * Function to decrypt a data to string
 */
export function decrypt (data: any) {
  try {
    const bytes = CryptoJS.AES.decrypt(data, environment.cipher.enc.toString())
    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8)).toString()
    }
    return data
  } catch (e) {
    console.log('Error during decrypt: ', e)
  }
}

export default { encrypt, decrypt }
