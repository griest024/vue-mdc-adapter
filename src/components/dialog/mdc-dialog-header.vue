<template>
  <header class="mdc-dialog__header">
    <mdc-dialog-header-title v-if="titleText" :text="titleText" />
    <slot/>
  </header>
</template>

<script>
export default {
  name: 'mdc-dialog-header',
  props: {
    titleText: String
  }
}
</script>
