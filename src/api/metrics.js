import request from '@/utils/request'

export function getDashboardData() {
  let url = "/mkube/api/v1/dashboard/usage"
  return request({
    url: url,
    method: "get",
  })
}

