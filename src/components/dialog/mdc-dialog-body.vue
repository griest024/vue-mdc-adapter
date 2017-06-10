<template>
  <section class="mdc-dialog__body" :class="classes">
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
