<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link :to="{ name: 'home' }" class="navbar-brand">
        MY LISTS
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheHeader extends Vue {}
</script>
