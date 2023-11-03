<script setup>
import List from "@/components/app/List.vue";
import ListItem from "@/components/app/ListItem.vue";
import Popover from "@/components/app/Popover.vue";

const props = defineProps({
    items: {
      type: Array,
      default: () => [],
    },
    hideArrow: {
      type: Boolean,
      default: false,
    }
});

const emit = defineEmits(['select']);

</script>

<template>
  <Popover trigger="mouseenter click">
    <template #trigger>
      <slot name="trigger">
        <button>
          <slot></slot>
          <v-mdi v-if="!hideArrow" name="mdi-chevron-down" class="align-bottom"></v-mdi>
        </button>
      </slot>
    </template>
    <List class="space-y-1">
      <ListItem
        v-for="item in props.items"
        :key="item.id"
        class="cursor-pointer relative"
        @click="emit('select', item.id)"
      >
        <slot name="item" v-bind="item">
          {{ item.name }}
        </slot>
      </ListItem>
    </List>
  </Popover>
</template>