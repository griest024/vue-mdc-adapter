import VueMDCFAB from './mdc-fab.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCFAB}

export default {
  install (vm) {
    vm.component('mdc-fab', VueMDCFAB)
  }
}
