<script setup>
import {onMounted, ref} from "vue";
import codemirror from "@/lib/codemirror";

const emit = defineEmits(['onChange'])
const contentContainer = ref(null);

function createInstance() {
  const editor = codemirror(contentContainer.value)

  editor.on("change", function () {
    emit('onChange', editor.getValue());
  });
}

onMounted(createInstance);
</script>

<template>
  <div class="app-editor w-full h-full">
    <div class="wrapper w-full h-full" ref="contentContainer"></div>
  </div>
</template>

<style scoped lang="scss">

.app-editor .CodeMirror {
  font-family: 'Fira Code', monospace;
  height: 100%;
}

.app-editor .CodeMirror pre {
  word-break: break-word;
}
</style>