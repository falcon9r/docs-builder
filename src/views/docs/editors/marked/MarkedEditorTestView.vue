<script setup>
import {computed, ref} from "vue";
import {marked} from "marked";

const html = ref('');

fetch("/index.md")
    .then((response) => response.text())
    .then((text) => {
        html.value = text;
    });

const htmlContent = computed(() => marked(html.value))
</script>

<template>
  <div v-html="htmlContent">
  </div>
</template>

<style scoped lang="css">

</style>