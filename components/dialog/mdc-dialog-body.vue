<template>
  <section class="mdc-dialog__body">
    <slot/>
  </section>
</template>

<script>
export default {
  props: {
    scrollable: Boolean
  },
  computed: {
    classes () {
      return {
        'mdc-dialog__body--scrollable': this.scrollable
      }
    }
  }
}
</script>
