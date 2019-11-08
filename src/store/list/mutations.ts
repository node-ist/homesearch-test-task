import { MutationTree } from 'vuex'
import { ListState } from './types'
import { Item, UpdateItemPayload } from '@/types'
import * as types from '../mutation-types'

export const mutations: MutationTree<ListState> = {
  [types.SET_ITEM](state, payload: Item) {
    state.items.push(payload)
  },
  [types.REMOVE_ITEM](state, index: number) {
    state.items.splice(index, 1)
  },
  [types.UPDATE_ITEM](state, payload: UpdateItemPayload) {
    state.items[payload.index] = payload.item
  },
  [types.SET_EDIT_MODE](state, payload: boolean) {
    state.editMode = payload
  },
}
