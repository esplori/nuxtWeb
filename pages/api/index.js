import {get, post} from '../../plugins/axios'
import baseUrl from '../../plugins/baseUrl'

export async function getListApi (data) {
  const url = baseUrl + '/pages/getList'
  const options = {}
  return post(url, data, options)
}
export async function getRecomListApi (data) {
  const url = baseUrl + '/pages/getRecomList'
  const options = {}
  return post(url, data, options)
}
export async function getDetailApi (id, data) {
  const url = baseUrl +  '/pages/getDetail/' + id
  const options = {}
  return get(url, data, options)
}
export async function getDetailApi2 (id, data) {
  const url = '/pages/getDetail/' + id
  const options = {}
  return get(url, data, options)
}
