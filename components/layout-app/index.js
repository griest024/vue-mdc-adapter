import VueMDCLayoutApp from './mdc-layout-app.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCLayoutApp}

export default {
  install (vm) {
    vm.component('mdc-layout-app', VueMDCLayoutApp)
  }
}
