import request from '@/utils/request'


export function deleteIngRoute(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/ingroute/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}


export function createIngRoute(data) {
  return request({
    url: '/mkube/api/v1/ingroute',
    method: 'post',
    data
  })
}


export function getMiddlewareList(params){
  let namespace = params.namespace
  let url = "/mkube/api/v1/ingroute/" + namespace+"/middleware"
  return request({
    url: url,
    method: "get",
  })
}

export function getIngRouteItemOrList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let url = "/mkube/api/v1/ingroute/" + namespace
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
