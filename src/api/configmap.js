import request from '@/utils/request'


export function deleteCm(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/configmap/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}


export function createConfigMap(data) {
  return request({
    url: '/mkube/api/v1/configmap',
    method: 'post',
    data
  })
}

export function getCmItemOrList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let url = "/mkube/api/v1/configmap/" + namespace
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

