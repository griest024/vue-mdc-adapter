import VueMDCSnackbar from './mdc-snackbar.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCSnackbar}

export default {
  install (vm) {
    vm.component('mdc-snackbar', VueMDCSnackbar)
  }
}
