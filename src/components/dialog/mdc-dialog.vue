<template>
  <aside class="mdc-dialog" :class="classes" :aria-labelledby="labelID" :aria-describedby="descriptionID">
    <mdc-dialog-surface v-if="$slots.title || $slots.body || titleText || bodyText || acceptText || cancelText">
      <mdc-dialog-header :titleText="titleText" v-if="$slots.title || titleText">
        <mdc-dialog-header-title :id="labelID" v-if="$slots.title">
          <slot name="title" />
        </mdc-dialog-header-title>
      </mdc-dialog-header>
      <mdc-dialog-body :text="bodyText" :id="descriptionID" :scrollable="scrollable" v-if="$slots.body || bodyText">
        <slot name="body" />
      </mdc-dialog-body>
      <mdc-dialog-footer v-if="acceptText || cancelText" :cancelText="cancelText" :acceptText="acceptText" />        
    </mdc-dialog-surface>
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
  name: 'mdc-dialog',
  props: {
    label: String,
    description: String,
    scrollable: Boolean,
    id: String,
    acceptText: String,
    cancelText: String,
    titleText: String,
    bodyText: String
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
    labelID () {
      return this.id ? this.id.toString() + '-label' : this.label.toString()
    },
    descriptionID () {
      return this.id ? this.id.toString() + '-description' : this.description.toString()
    },
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
        vm.$emit('accept')
      },
      notifyCancel () {
        vm.$emit('cancel')
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
    this.foundation.init()
  },
  beforeDestroy () {
    this.foundation.destroy()
  }
}
</script>
