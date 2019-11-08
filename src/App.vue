<template>
  <div id="app" class="app">
    <TheHeader />
    <div class="mt-3">
      <PageTransition>
        <router-view />
      </PageTransition>
    </div>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheHeader from '@/components/TheHeader/index.vue'

@Component({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {
  created() {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })
    this.$router.afterEach(() => {
      this.$Progress.finish()
    })
  }

  mounted() {
    this.$Progress.finish()
  }
}
</script>

<style lang="scss">
@import 'styles/style';
@import '~bootstrap/scss/bootstrap.scss';
</style>
