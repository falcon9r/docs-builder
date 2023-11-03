<script setup>
import NavMenuItem from './NavMenuItem.vue';

const settingsItem = [
  {id: 'autoSave', name: 'Auto Save'},
  {id: 'syncScroll', name: 'Sync Scroll'},
];

const items = [
  {
    id: 1,
    name: 'html'
  },
  {
    id: 2,
    name: 'markdown'
  }
];
</script>


<template>
  <div class="menu flex items-center">
    <NavMenuItem
        :items="items" />
  </div>
</template>