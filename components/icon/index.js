import VueMDCICon from './mdc-icon.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCICon}

export default {
  install (vm) {
    vm.component('mdc-icon', VueMDCICon)
  }
}
