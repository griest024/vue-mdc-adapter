import VueMDCCheckbox from './mdc-checkbox.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCCheckbox}

export default {
  install (vm) {
    vm.component('mdc-checkbox', VueMDCCheckbox)
  }
}
