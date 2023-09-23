import request from '@/utils/request'

export function getDashboardData() {
  let url = "/k8s/dashboard/usage"
  return request({
    url: url,
    method: "get",
  })
}

