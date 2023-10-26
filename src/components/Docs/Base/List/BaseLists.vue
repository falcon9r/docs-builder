<script setup>
defineProps({
  urls: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="has-three-text-columns">
    <li v-for="(url, index) in urls"
        class="has-three-text-columns-list-items"
        :key="index">
      <a class="bar-link" :href="url.url">{{ url.label }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
a {
  outline: 0;
  cursor: pointer;
  word-wrap: break-word;
  text-decoration: none;
  color: #75b6e7;
  border-left: 6px solid #404040;
  min-height: 36px;
  font-size: 1.125rem;
  display: flex;
  margin-top: 0.25rem !important;
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important;
  align-items: center;
}

a:hover {
  text-decoration: underline;
  color: #278cda;
  border-color: #278cda;
  border-left-color: #75b6e7;
}

ul {
  display: block;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
.has-three-text-columns {
  columns: 3;
}

.has-three-text-columns-list-items {
  break-inside: avoid;
}
</style>