import VueMDCTab from './mdc-tab.vue'
import VueMDCTabBar from './mdc-tab-bar.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCTab, VueMDCTabBar}

export default {
  install (vm) {
    vm.component('mdc-tab', VueMDCTab)
    vm.component('mdc-tab-bar', VueMDCTabBar)
  }
}
