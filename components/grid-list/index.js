import VueMDCGridList from './mdc-grid-list.vue'
import VueMDCGridTile from './mdc-grid-tile.vue'
import {classPrefix} from './constants'

export {classPrefix, VueMDCGridList, VueMDCGridTile}

export default {
  install (vm) {
    vm.component('mdc-grid-list', VueMDCGridList)
    vm.component('mdc-grid-tile', VueMDCGridTile)
  }
}
