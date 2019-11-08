<template>
  <div class="list">
    <div class="container">
      <div class="row d-flex justify-content-end mb-4">
        <div class="col-sm-2 d-flex justify-content-end">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              v-model="edit"
              class="custom-control-input"
              id="editModeSwitch"
              @change="onEditToggle"
            />
            <label class="custom-control-label" for="editModeSwitch">
              Toggle edit mode
            </label>
          </div>
        </div>
      </div>
      <FadeTransition>
        <div v-if="isEditMode" class="row">
          <div class="col">
            <div v-for="(item, index) in items" :key="index" class="list-item">
              <ListItemControl
                :edit="isEditMode"
                :index="index"
                :item="item"
                @onUpdateItem="onUpdateItem"
                @onRemoveItem="onRemoveItem"
              />
            </div>
            <div class="list-item">
              <ListItemControl
                ref="addListItemControl"
                @onAddItem="onAddItem"
                @onRemoveItem="onRemoveItem"
              />
            </div>
          </div>
        </div>
        <div v-else class="row">
          <div class="col">
            <div v-for="(item, index) in items" :key="index" class="list-item">
              <ListItemPreview :item="item" />
            </div>
          </div>
        </div>
      </FadeTransition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import ListItemControl from './ListItemControl.vue'
import ListItemPreview from './ListItemPreview.vue'
import { Item, UpdateItemPayload } from '@/types'

const namespace: string = 'list'

@Component({
  components: {
    ListItemControl,
    ListItemPreview,
  },
})
export default class List extends Vue {
  @State('editMode', { namespace }) editMode!: boolean
  @State('items', { namespace }) items!: Item[]
  @Mutation('SET_EDIT_MODE', { namespace }) setEditMode: any
  @Mutation('SET_ITEM', { namespace }) setItem: any
  @Mutation('UPDATE_ITEM', { namespace }) updateItem: any
  @Mutation('REMOVE_ITEM', { namespace }) removeItem: any
  @Ref() readonly addListItemControl!: ListItemControl

  get isEditMode() {
    return this.editMode
  }

  get lastItemIndex() {
    return this.items.length - 1
  }

  edit?: boolean = false

  created() {
    this.edit = this.editMode
  }

  mounted() {
    this.focusCreateListItemControl()
  }

  focusCreateListItemControl() {
    this.addListItemControl.$el.querySelector('input').focus()
  }

  onEditToggle() {
    this.setEditMode(this.edit)
  }

  onAddItem(item: Item) {
    this.setItem(item)
  }

  onUpdateItem(payload: UpdateItemPayload) {
    this.updateItem(payload)
  }

  onRemoveItem(index: number) {
    index ? this.removeItem(index) : this.removeItem(this.lastItemIndex)
    this.focusCreateListItemControl()
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  height: 38px;
  margin-bottom: 10px;
}
</style>
