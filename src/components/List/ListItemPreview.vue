<template>
  <div class="list-item-preview">
    {{ item.text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Item } from '@/types'

@Component
export default class ListItemPreview extends Vue {
  @Prop() item!: Item
}
</script>

<style lang="scss" scoped>
.list-item-preview {
  padding: 0.375rem 0.75rem;
}
</style>
