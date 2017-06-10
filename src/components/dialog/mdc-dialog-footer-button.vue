<template>
  <mdc-button type="button" class="mdc-dialog__footer__button" :class="classes">
    <slot/>
  </mdc-button>
</template>

<script>
import '../button/mdc-button'

export default {
  name: 'mdc-dialog-footer-button',
  components: [
    'mdc-button'
  ],
  props: {
    accept: Boolean,
    cancel: Boolean
  },
  computed: {
    classes () {
      return {
        'mdc-dialog__footer__button--accept': this.accept,
        'mdc-dialog__footer__button--cancel': this.cancel
      }
    }
  }
}
</script>
