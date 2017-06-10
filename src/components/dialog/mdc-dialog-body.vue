<template>
  <section class="mdc-dialog__body" :class="classes">
    {{ text }}
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'mdc-dialog-body',
  props: {
    scrollable: Boolean,
    text: String
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
