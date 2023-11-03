<script setup>
import {onMounted, ref, shallowRef, watch} from "vue";
import createTippy from '@/utils/createTippy';

const props = defineProps({
  placement: {
    type: String,
    default: 'bottom'
  },
  trigger: {
    type: String,
    default: 'click',
  },
  to: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const targetEl = ref(null);
const content  = ref(null);
const instance = shallowRef(null);

watch(() => props.disabled, function (value) {
    if(value) {
      instance.value.enable();
    }
    else
    {
      instance.value.hide();
      instance.value.disabled();
    }
});


onMounted(() => {
  const target = props.to ? document.querySelector(props.to) : targetEl.value;
  instance.value = createTippy(target, {
    role: 'popover',
    theme: null,
    content: content.value,
    placement: props.placement,
    trigger: props.trigger,
    interactive: true,
    appendTo: () => document.body,
  });
});
</script>

<template>
  <div class="ui-popover inline-block" :class="{ hidden: to }">
    <div ref="targetEl" class="ui-popover__trigger inline-block">
      <slot name="trigger"></slot>
    </div>
    <div
        ref="content"
        class="ui-popover__content bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-xl"
    >
      <slot></slot>
    </div>
  </div>
</template>
