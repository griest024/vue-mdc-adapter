import VueMDCIConToggle from './mdc-icon-toggle.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCIConToggle}

export default {
  install (vm) {
    vm.component('mdc-icon-toggle', VueMDCIConToggle)
  }
}
