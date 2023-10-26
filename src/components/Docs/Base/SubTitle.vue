<script setup>
defineProps({
  subTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h4 class="subtitle is-uppercase letter-spacing-wide">{{ subTitle }}</h4>
</template>

<style scoped lang="scss">

</style>