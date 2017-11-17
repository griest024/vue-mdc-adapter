<template>
  <custom-element 
    :tag="isLink ? 'a': 'button'" 
    :href="isLink && href"
    :role="isLink ? 'button' : undefined"
    ref="root" :disabled="disabled" 
    :class="classes" :style="styles" 
    @click="dispatchEvent">
    <slot />
  </custom-element>
</template>

<script>
import {RippleBase, DispatchEventMixin, CustomElementMixin} from '../util'
import {classPrefix} from '.'

export default {
  name: 'mdc-button',
  mixins: [DispatchEventMixin, CustomElementMixin],
  props: {
    href: String,
    disabled: Boolean,
    raised: Boolean,
    unelevated: Boolean,
    stroked: Boolean,
    dense: Boolean,
    compact: Boolean
  },
  computed: {
    isLink () {
      return this.href && !this.disabled
    }
  },
  data () {
    return {
      classes: {
        [`${classPrefix}`]: true,
        [`${classPrefix}--raised`]: this.raised,
        [`${classPrefix}--unelevated`]: this.unelevated,
        [`${classPrefix}--stroked`]: this.stroked,
        [`${classPrefix}--dense`]: this.dense,
        [`${classPrefix}--compact`]: this.compact
      },
      styles: {}
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
