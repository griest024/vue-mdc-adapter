<template>
  <custom-element 
    :tag="isLink ? 'a': 'button'" 
    :href="isLink && href"
    :role="isLink ? 'button' : undefined"
    ref="root" class="mdc-card-action-button"
    :class="classes" :style="styles" :disabled="disabled" 
    @click="dispatchEvent">
    <slot />
  </custom-element>
</template>

<script>
import {RippleBase, DispatchEventMixin, CustomElementMixin} from '../util'
import {classPrefix as buttonClassPrefix} from '../mdc-button'
import {classPrefix as cardClassPrefix} from '.'

export default {
  name: 'mdc-card-action-button',
  mixins: [DispatchEventMixin, CustomElementMixin],
  props: {
    href: String,
    disabled: Boolean
  },
  data () {
    return {
      classes: {
        [`${buttonClassPrefix}`]: true,
        [`${buttonClassPrefix}--compact`]: true,
        [`${cardClassPrefix}__action`]: true
      },
      styles: {}
    }
  },
  computed: {
    isLink () {
      return this.href && !this.disabled
    }
  },
  mounted () {
    this.ripple = new RippleBase(this)
    this.ripple.init()
  },
  beforeDestroy () {
    this.ripple.destroy()
  }
}
</script>
