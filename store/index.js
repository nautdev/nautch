import axios from 'axios'

export const state = () => ({
  insta: null
})

export const mutations = {
  setInsta(state, data) {
    state.insta = data
  }
}

export const actions = {
  async getInsta({ commit }) {
    console.log('get insta')
    const { data } = await axios.get(
      'https://api.instagram.com/v1/users/self/media/recent?access_token=7851094339.df0e680.8368bb420e094970b13af5f3a0531014&count=40'
    )
    commit('setInsta', data)
  }
}

export const getters = {
  stories: state => {
    return state.insta.data
  }
}
