<template>
  <aside class="mdc-dialog" :class="classes" :aria-labelledby="label" :aria-describedby="description">
    <slot/>
  </aside>
</template>

<style lang="scss">
  @import "@material/dialog/mdc-dialog";
</style>

<script>
import MDCDialogFoundation from '@material/dialog/foundation'
import * as util from '@material/dialog/util'

export default {
  props: {
    label: String,
    description: String
  },
  data () {
    return {
      foundation: null,
      focusTrap: null,
      rootClasses: {},
      styles: {}
    }
  },
  methods: {
    open () {
      this.foundation.open()
    },
    close () {
      this.foundation.close()
    },
    accept (notifyChange = false) {
      this.foundation.accept(notifyChange)
    },
    cancel (notifyChange = false) {
      this.foundation.cancel(notifyChange)
    },
    isOpen () {
      return this.foundation.isOpen()
    }
  },
  computed: {
    classes () {
      return {
        ...this.rootClasses
      }
    },
    acceptButtonElement () {
      return this.$el.querySelector(MDCDialogFoundation.strings.ACCEPT_SELECTOR)
    },
    surfaceElement () {
      return this.$el.querySelector(MDCDialogFoundation.strings.DIALOG_SURFACE_SELECTOR)
    }
  },
  mounted () {
    this.focusTrap = util.createFocusTrapInstance(this.surfaceElement, this.acceptButtonElement)

    let vm = this
    this.foundation = new MDCDialogFoundation({
      addClass (className) {
        vm.$set(vm.rootClasses, className, true)
      },
      removeClass (className) {
        vm.$delete(vm.rootClasses, className)
      },
      setStyle (property, value) {
        vm.$set(vm.rootStyles, property, value)
      },
      addBodyClass (className) {
        document.body.classList.add(className)
      },
      removeBodyClass (className) {
        document.body.classList.remove(className)
      },
      eventTargetHasClass (target, className) {
        return target.classList.contains(className)
      },
      registerInteractionHandler (evt, handler) {
        vm.$el.addEventListener(evt, handler)
      },
      deregisterInteractionHandler (evt, handler) {
        vm.$el.removeEventListener(evt, handler)
      },
      registerSurfaceInteractionHandler (evt, handler) {
        vm.surfaceElement.addEventListener(evt, handler)
      },
      deregisterSurfaceInteractionHandler (evt, handler) {
        vm.surfaceElement.removeEventListener(evt, handler)
      },
      registerDocumentKeydownHandler (handler) {
        document.addEventListener('keydown', handler)
      },
      deregisterDocumentKeydownHandler (handler) {
        document.removeEventListener('keydown', handler)
      },
      registerTransitionEndHandler (handler) {
        vm.surfaceElement.addEventListener('transitionend', handler)
      },
      deregisterTransitionEndHandler (handler) {
        vm.surfaceElement.removeEventListener('transitionend', handler)
      },
      notifyAccept () {
        vm.$emit(MDCDialogFoundation.strings.ACCEPT_EVENT)
      },
      notifyCancel () {
        vm.$emit(MDCDialogFoundation.strings.CANCEL_EVENT)
      },
      trapFocusOnSurface () {
        vm.focusTrap.activate()
      },
      untrapFocusOnSurface () {
        vm.focusTrap.deactivate()
      },
      isDialog (el) {
        return el === vm.surfaceElement
      }
    })
  }
}
</script>
