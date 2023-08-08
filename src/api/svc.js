import request from '@/utils/request'


export function deleteSvc(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/svc/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}


export function createSvc(data) {
  return request({
    url: '/mkube/api/v1/svc',
    method: 'post',
    data
  })
}

export function getSvcItemOrList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let url = "/mkube/api/v1/svc/" + namespace
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

