const city = window.sessionStorage.getItem('city')

const state = {
  curCity: city ? JSON.parse(city) : null
}

const mutations = {
  SET_CURCITY (state, payload) {
    state.curCity = payload

    window.sessionStorage.setItem('city', JSON.stringify(state.curCity))
  }
}

const getters = {
  curCityName (sate) {
    return state.curCity ? sate.curCity.name : ''
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters
}
