<template>
  <div class="mdc-card" :class="classes">
    <slot>
    </slot>
  </div>
</template>

<script>
import {classPrefix} from '.'

export default {
  name: 'mdc-card',
  props: {
    'dark': Boolean
  },
  data () {
    return {
      classes: {
        [`${classPrefix}--theme-dark`]: this.dark
      }
    }
  }
}
</script>
