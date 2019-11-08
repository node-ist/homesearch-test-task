<template>
  <transition name="page" mode="out-in">
    <slot />
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PageTransition extends Vue {}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
