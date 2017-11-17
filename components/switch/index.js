import VueMDCSwitch from './mdc-switch.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCSwitch}

export default {
  install (vm) {
    vm.component('mdc-switch', VueMDCSwitch)
  }
}
