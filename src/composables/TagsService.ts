import { apiAuth } from 'src/boot/axios'

export async function getTags () {
  return await apiAuth
    .get('tag/list')
    .then(async (response: any) => {
      const tagsList = response.data.data.tags.map(
        (t) => { return { name: t.toString() } }
      )
      return tagsList
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function newTag (payload: any) {
  return await apiAuth
    .post('tag/new', payload)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export async function deleteTag (tagName: string) {
  return await apiAuth
    .delete(`tag/delete/${tagName}`)
    .then(async (response: any) => {
      return response.data.data
    })
    .catch((error: any) => {
      throw error?.response?.data?.message || error?.message
    })
}

export default { getTags, newTag, deleteTag }
