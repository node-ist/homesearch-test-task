<template>
  <div class="home">
    <List />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import List from '@/components/List/List.vue'

@Component({
  components: {
    List,
  },
})
export default class Home extends Vue {}
</script>
