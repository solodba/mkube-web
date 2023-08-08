import request from '@/utils/request'

export function getNamespaceList() {
  return request({
    url: 'mkube/api/v1/namespace',
    method: 'get'
  })
}
