<script setup>
defineProps({
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <p class="font-size-lg">{{ description }}</p>
</template>

<style scoped lang="scss">

</style>