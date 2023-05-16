import { apiAuth } from 'src/boot/axios'

export async function getSumMoneyPerYear (year: any) {
  return await apiAuth
    .get(`charts/sum-money-per-year/${year}`)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function getCalcExpenseByTagPerYear (year: any) {
  return await apiAuth
    .get(`charts/expenses-year/${year}`)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function getCalcEarningByTagPerYear (year: any) {
  return await apiAuth
    .get(`charts/earnings-year/${year}`)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default {
  getSumMoneyPerYear,
  getCalcExpenseByTagPerYear,
  getCalcEarningByTagPerYear
}
