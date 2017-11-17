import VueMDCRadio from './mdc-radio.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCRadio}

export default {
  install (vm) {
    vm.component('mdc-radio', VueMDCRadio)
  }
}
