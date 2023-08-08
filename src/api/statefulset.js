import request from '@/utils/request'
import da from "element-ui/src/locale/lang/da";

export function createStatefulSet(data) {
  return request({
    url: '/mkube/api/v1/statefulset',
    method: 'post',
    data
  })
}

export function getStatefulSetItemOrList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let nodeName = params.nodeName
  let url = "/mkube/api/v1/statefulset/" + namespace
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

export function deleteStatefulSet(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/statefulset/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}
