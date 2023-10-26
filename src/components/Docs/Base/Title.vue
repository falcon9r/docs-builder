<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="title">{{ title }}</h1>
</template>

<style scoped lang="scss">

</style>