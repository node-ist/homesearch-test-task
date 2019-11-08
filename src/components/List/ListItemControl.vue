<template>
  <div class="list-item-control">
    <label :for="inputId" class="sr-only">Your item:</label>
    <input
      v-model="form.text"
      :id="inputId"
      type="text"
      class="form-control"
      placeholder="Type here..."
      :readonly="!edit"
      @keyup="onKeyDown"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'
import { Item } from '@/types'

@Component
export default class ListItemControl extends Vue {
  @Prop({ default: true }) edit!: boolean
  @Prop() index!: number
  @Prop() item!: Item

  form: Item = {
    text: '',
  }

  get formIsEmpty() {
    return !this.form.text.length
  }

  get inputId() {
    return this.index
      ? `list-item-control-input-${this.index}`
      : 'list-item-control-input'
  }

  get isExistingItem() {
    return this.index || this.index === 0
  }

  created() {
    this.onControlInit()
  }

  @Watch('item')
  onTextChanged(value: Item) {
    if (value) {
      this.fillForm(value)
    }
  }

  onControlInit() {
    if (this.item) {
      this.fillForm(this.item)
    }
  }

  fillForm(value: Item) {
    this.form = value
  }

  onKeyDown(event: any) {
    switch (event.keyCode) {
      case 13:
        this.handleEnterKey()
        break
      case 8:
        this.handleBackspaceKey()
        break
      default:
        break
    }
  }

  handleEnterKey() {
    if (this.isExistingItem) {
      this.onUpdateItem()
    } else {
      this.onAddItem()
      this.clearForm()
    }
  }

  handleBackspaceKey() {
    if (this.formIsEmpty) {
      this.onRemoveItem()
    }
  }

  @Emit('onUpdateItem')
  onUpdateItem() {
    return {
      item: this.form,
      index: this.index,
    }
  }

  @Emit('onAddItem')
  onAddItem() {
    return this.form
  }

  @Emit('onRemoveItem')
  onRemoveItem() {
    return this.index
  }

  clearForm() {
    this.form = {
      text: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item-control {
  width: 100%;
}
</style>
