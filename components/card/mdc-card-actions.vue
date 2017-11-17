<template>
  <section class="mdc-card-actions" 
          :class="classes">
    <slot>
    </slot>
  </section>
</template>

<script>
import MDCCardActionButton from './mdc-card-action-button.vue'
import {classPrefix} from '.'

export default {
  name: 'mdc-card-actions',
  props: {
    vertical: Boolean
  },
  components: {
    'mdc-card-action-button': MDCCardActionButton
  },
  data () {
    return {
      classes: {
        [`${classPrefix}__actions`]: true,
        [`${classPrefix}__actions--vertical`]: this.vertical
      }
    }
  }
}
</script>
