import request from '@/utils/request'


export function deleteSecret(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/secret/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}


export function createSecret(data) {
  return request({
    url: '/mkube/api/v1/secret',
    method: 'post',
    data
  })
}

export function getSecretItemOrList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let url = "/mkube/api/v1/secret/" + namespace
  let query = []
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

