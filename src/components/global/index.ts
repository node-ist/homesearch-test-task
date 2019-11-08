import Vue from 'vue'
import PageTransition from './transition/PageTransition.vue'
import FadeTransition from './transition/FadeTransition.vue'
;[PageTransition, FadeTransition].forEach(Component => {
  Vue.component(Component.name, Component)
})
