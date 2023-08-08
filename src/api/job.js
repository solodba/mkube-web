import request from '@/utils/request'

export function createJob(data) {
  return request({
    url: '/mkube/api/v1/job',
    method: 'post',
    data
  })
}

export function getJobItemOrList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let nodeName = params.nodeName
  let url = "/mkube/api/v1/job/" + namespace
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

export function deleteJob(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/job/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}
