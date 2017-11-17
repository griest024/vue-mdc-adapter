import VueMDCSlider from './mdc-slider.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCSlider}

export default {
  install (vm) {
    vm.component('mdc-slider', VueMDCSlider)
  }
}
