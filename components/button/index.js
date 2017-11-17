import VueMDCButton from './mdc-button.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCButton}

export default {
  install (vm) {
    vm.component('mdc-button', VueMDCButton)
  }
}
