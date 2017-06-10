export default {
  install (vm) {
    vm.component('mdc-dialog-backdrop', require('./mdc-dialog-backdrop'))
    vm.component('mdc-dialog-body', require('./mdc-dialog-body'))
    vm.component('mdc-dialog-footer-button', require('./mdc-dialog-footer-button'))
    vm.component('mdc-dialog-footer', require('./mdc-dialog-footer'))
    vm.component('mdc-dialog-header-title', require('./mdc-dialog-header-title'))
    vm.component('mdc-dialog-header', require('./mdc-dialog-header'))
    vm.component('mdc-dialog-surface', require('./mdc-dialog-surface'))
    vm.component('mdc-dialog', require('./mdc-dialog'))
  }
}
