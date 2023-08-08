import request from '@/utils/request'


export function deleteSc(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/sc/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}


export function createSc(data) {
  return request({
    url: '/mkube/api/v1/sc',
    method: 'post',
    data
  })
}

export function getScList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let url = "/mkube/api/v1/sc/" + namespace
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

