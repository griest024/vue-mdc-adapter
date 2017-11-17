import VueMDCTextField from './mdc-textfield.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCTextField}

export default {
  install (vm) {
    vm.component('mdc-textfield', VueMDCTextField)
  }
}
