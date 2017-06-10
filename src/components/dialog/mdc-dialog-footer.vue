<template>
  <footer class="mdc-dialog__footer">
    <mdc-dialog-footer-button cancel v-if="cancelText">
      {{ cancelText }}
    </mdc-dialog-footer-button>
    <mdc-dialog-footer-button accept v-if="acceptText">
      {{ acceptText }}
    </mdc-dialog-footer-button>
    <slot/>
  </footer>
</template>

<script>
export default {
  name: 'mdc-dialog-footer',
  props: {
    acceptText: String,
    cancelText: String
  }
}
</script>
