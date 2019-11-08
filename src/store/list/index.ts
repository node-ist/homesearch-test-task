import { Module } from 'vuex'
import { mutations } from './mutations'
import { ListState } from './types'
import { RootState } from '../types'

export const state: ListState = {
  editMode: true,
  items: [],
}

const namespaced: boolean = true

export const list: Module<ListState, RootState> = {
  namespaced,
  state,
  mutations,
}
