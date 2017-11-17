import VueMDCLinearProgress from './mdc-linear-progress.vue'
import {classPrefix} from './constants'

export {
  classPrefix,
  VueMDCLinearProgress
}

export default {
  install (vm) {
    vm.component('mdc-linear-progress', VueMDCLinearProgress)
  }
}
