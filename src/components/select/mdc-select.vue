<template>
  <div class="mdc-select">
    <span class="mdc-select__selected-text">{{ selectedText }}</span>
  
    <slot/>
  </div>
</template>

<script>
import MDCSelectFoundation from '@material/select/foundation'

export default {
  name: 'mdc-select',
  props: {
    selectedText: String,
    native: Boolean,
    options: {
      type: Array,
      default: [],
      validator (value) {
        return value.every(function (element) {
          // make sure element can be processed
        })
      }
    }
  },
  computed: {
    classes () {
      return {
        ...this.rootClasses
      }
    }
  },
  data () {
    return {
      foundation: null,
      rootClasses: {}
    }
  },
  mounted () {
    let vm = this

    this.foundation = new MDCSelectFoundation({
      addClass (className) {
        vm.$set(vm.rootClasses, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.rootClasses, className)
      },
      setAttr (attr, value) {
        vm.$el.setAttribute(attr, value)
      },
      rmAttr (attr, value) {
        vm.$el.removeAttribute(attr, value)
      },
      computeBoundingRect () {
        vm.$el.getBoundingClientRect()
      },
      registerInteractionHandler (type, handler) {
        vm.$el.addEventListener(type, handler)
      },
      deregisterInteractionHandler (type, handler) {
        vm.$el.removeEventListener(type, handler)
      },
      focus () {
        vm.$el.focus()
      },
      makeTabbable () {
        vm.$el.tabIndex = 0
      },
      makeUntabbable () {
        vm.$el.tabIndex = -1
      },
      getComputedStyleValue (prop) {
        return window.getComputedStyle(vm.$el).getPropertyValue(prop)
      },
      setStyle (propertyName, value) {
        vm.$el.style.setProperty(propertyName, value)
      },
      create2dRenderingContext () {
        return document.createElement('canvas').getContext('2d')
      },
      setMenuElStyle (propertyName, value) {
        vm.menu.$el.style.setProperty(propertyName, value)
      },
      setMenuElAttr (attr, value) {
        vm.menu.$el.setAttribute(attr, value)
      },
      rmMenuElAttr (attr) {
        vm.menu.$el.removeAttribute(attr)
      },
      getMenuElOffsetHeight () {
        return vm.menu.$el.offsetHeight
      },
      openMenu (focusIndex) {
        vm.menu.show({focusIndex})
      },
      isMenuOpen () {
        return vm.menu.open
      },
      setSelectedTextContent (selectedTextContent) {
        vm.selectedText_.textContent = selectedTextContent
      },
      getNumberOfOptions () {
        return vm.options.length
      },
      getTextForOptionAtIndex (index) {
        return vm.options[index].textContent
      },
      getValueForOptionAtIndex (index) {
        return vm.options[index].id || vm.options[index].textContent
      },
      setAttrForOptionAtIndex (index, attr, value) {
        vm.options[index].setAttribute(attr, value)
      },
      rmAttrForOptionAtIndex (index, attr) {
        vm.options[index].removeAttribute(attr)
      },
      getOffsetTopForOptionAtIndex (index) {
        return vm.options[index].offsetTop
      },
      registerMenuInteractionHandler (type, handler) {
        vm.menu.listen(type, handler)
      },
      deregisterMenuInteractionHandler (type, handler) {
        vm.menu.unlisten(type, handler)
      },
      notifyChange () {
        vm.emit(MDCSelectFoundation.strings.CHANGE_EVENT, this)
      },
      getWindowInnerHeight () {
        return window.innerHeight
      }
    })
  }
}
</script>
