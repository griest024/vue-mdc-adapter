import VueMDCDialog from './mdc-dialog.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCDialog}

export default {
  install (vm) {
    vm.component('mdc-dialog', VueMDCDialog)
  }
}
