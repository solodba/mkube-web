import {getDashboardData} from "@/api/metrics"

const state = {
  podName: ""
}

const mutations = {}

const actions = {
  //查看列表
  getMetricsDashboard({commit, state}) {
    return new Promise((resolve, reject) =>
      getDashboardData().then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    )
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

