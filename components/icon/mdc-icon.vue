<template>
  <span class="mdc-icon" :class="{'material-icons':!!icon}">
    <slot>{{ icon }}</slot>
  </span>
</template>

<script>
import {classPrefix} from '.'

export default {
  name: 'mdc-icon',
  props: {
    icon: String
  }
}
</script>
