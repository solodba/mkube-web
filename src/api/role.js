import request from '@/utils/request'


export function deleteRole(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/role/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}


export function createRole(data) {
  return request({
    url: '/mkube/api/v1/role',
    method: 'post',
    data
  })
}

export function getRoleDetailOrList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let url = "/mkube/api/v1/role"
  let query = []
  if (namespace !== undefined && namespace !== "") {
    query.push("namespace=" + namespace)
  }
  if (name !== undefined && name !== "") {
    query.push("name=" + name)
  }
  if (keyword !== undefined && keyword !== "") {
    query.push("keyword=" + keyword)
  }
  if (query.length > 0) {
    url = url + "?" + query.join("&")
  }
  return request({
    url: url,
    method: "get",
  })
}

