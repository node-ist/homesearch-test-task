import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { list } from './list/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    list,
  },
}

export default new Vuex.Store<RootState>(store)
