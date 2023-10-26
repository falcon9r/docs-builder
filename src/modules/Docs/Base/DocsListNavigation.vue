<script setup>
import Title from "@/components/Docs/Base/Title.vue";
import SubTitle from "@/components/Docs/Base/SubTitle.vue";
import ShortDescription from "@/components/Docs/Base/ShortDescription.vue";
import BaseLists from "@/components/Docs/Base/List/BaseLists.vue";

defineProps({
  title : {
    type: String,
    required: true
  },
  urls : {
    type: Array,
    required: true
  },
  description : {
    type: String,
    required: false
  },
  subtitle : {
    type: String,
    required: false
  }
})
</script>

<template>
    <SubTitle :sub-title="subtitle" v-if="subtitle !== undefined" />
    <Title :title="title" />
    <ShortDescription :description="description" v-if="description !== undefined" />
    <div class="margin-top-lg">
      <BaseLists :urls="urls" />
    </div>
</template>

<style scoped lang="scss">

</style>