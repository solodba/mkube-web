import request from '@/utils/request'
import da from "element-ui/src/locale/lang/da";

export function createDaemonSet(data) {
  return request({
    url: '/mkube/api/v1/daemonset',
    method: 'post',
    data
  })
}

export function getDaemonSetItemOrList(params) {
  let namespace = params.namespace
  let name = params.name
  let keyword = params.keyword
  let nodeName = params.nodeName
  let url = "/mkube/api/v1/daemonset/" + namespace
  let query = []
  if (nodeName !== undefined && nodeName !== "") {
    query.push("nodeName=" + nodeName)
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

export function deleteDaemonSet(params) {
  let namespace = params.namespace
  let name = params.name
  let url = "/mkube/api/v1/daemonset/" + namespace + "/" + name
  return request({
    url: url,
    method: "delete",
  })
}
