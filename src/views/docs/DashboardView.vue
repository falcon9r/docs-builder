<script setup>
import {ref} from "vue";
import DocsListNavigation from "@/modules/Docs/Base/DocsListNavigation.vue";
import DocsCardsNavigation from "@/modules/Docs/Base/DocsCardsNavigation.vue";
import themas from "@/data/thema.json";

const urls = ref(themas);

</script>

<template>
  <div class="container margin-top-lg">
    <DocsListNavigation title="Docs of products" :urls="urls" subtitle="INDEX" description="Themas of products"/>
    <DocsCardsNavigation />
  </div>
</template>

<style scoped lang="scss">

</style>