<template>
  <div v-if="text" class="mdc-dialog__header__title">
    {{ text }}
    <slot/>
  </div>
  <div v-else class="mdc-dialog__header__title">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'mdc-dialog-header-title',
  props: {
    text: String
  }
}
</script>
