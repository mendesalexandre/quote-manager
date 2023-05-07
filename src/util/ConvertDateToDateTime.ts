/**
 * Convert date to date and time.
 * @param date Date in format DD/MM/YYYY
 * @returns String with format YYYY-DD-MM T hh:mm:ss.fffZ
 */
export default function convertDate (date: string): string {
  const [day, month, year] = date.split('/')
  const isoDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  const hour = new Date().toLocaleTimeString('pt-BR')
  return `${isoDate}T${hour}.000Z`
}
