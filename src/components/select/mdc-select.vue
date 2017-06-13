<template>
  <!-- native select -->
  <select class="mdc-select" v-if="isNative()">
    <option default selected>{{ defaultText }}</option>
  </select>

  <!-- custom select -->
  <div class="mdc-select" v-else>
    <span class="mdc-select__selected-text">{{ defaultText }}</span>
  
    <slot/>
  </div>
</template>

<script>
import MDCSelectFoundation from '@material/select/foundation'

export default {
  name: 'mdc-select',
  props: {
    selectedText: String,
    disabled: Boolean,
    native: Boolean,
    type: {
      type: String,
      default: 'custom'
    },
    items: {
      type: Array,
      default: [],
      validator (value) {
        return value.every(function (element) {
          // make sure element can be processed
        })
      }
    }
  },
  methods: {
    // component API methods

    /**
     * Analogous to `HTMLSelectElement.prototype.item`
     * Returns the option at the specified index, or null if the index is out of bounds
     *
     * @param  {Number} index
     * @return {HTMLElement?}
     */
    item (index) {

    },

    /**
     * Analogous to `HTMLSelectElement.prototype.nameditem`
     * Returns the options either whose id equals the given key, or whose name attribute equals the given key
     * Returns null if no item with an id or name attribute of the specified key is found
     *
     * @param  {String} key
     * @return {HTMLElement?}
     */
    nameditem (key) {

    }
  },
  computed: {
    classes () {
      return {
        ...this.rootClasses
      }
    },
    menu () {

    },
    isNative () {
      return this.native || this.type === 'native'
    },
    // read-only component API properties

    /**
     * The id of the currently selected option
     * If no id is present on the selected option, its textContent is used
     *
     * @return {String} Returns an empty string when no option is selected
     */
    value () {

    },

    /**
     * An array of menu items comprising the select's options
     *
     * @return {HTMLElement[]}
     */
    options () {

    },

    /**
     * A NodeList of either the currently selected option, or no elements if nothing is selected
     *
     * @return {HTMLElement[]}
     */
    selectedOptions () {

    }
  },
  data () {
    return {
      foundation: null,
      rootClasses: {},
      selectedText: this.defaultText,
      // writable component API properties

      /**
       * The index of the currently selected option
       * Set to -1 if no option is currently selected
       * Changing this property will update the select element
       *
       * @type {Number}
       */
      selectedIndex: -1,

      /**
       * Whether or not the component is disabled
       * Settings this sets the disabled state on the component
       *
       * @type {Boolean}
       */
      isDisabled: this.disabled
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
        vm.selectedText = selectedTextContent
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
