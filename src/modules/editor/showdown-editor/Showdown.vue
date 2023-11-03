<script setup>
import NavToolbar from "@/components/editor/showdown-editor/NavToolbar.vue";
import ShowdownPreview from "@/modules/editor/showdown-editor/ShowdownPreview.vue";
import {ref} from "vue";
import ShowdownEditor from "@/modules/editor/showdown-editor/ShowdownEditor.vue";


const content = ref(localStorage.getItem('activeContent') ?? '');

function onChange(event) {
  content.value = event;
  localStorage.setItem('activeContent', event);
}


</script>

<template>
  <NavToolbar />
  <div class="flex relative" style="height: calc(100vh - 64px);">
    <ShowdownEditor
        class="lg:w-6/12 w-full  bg-black h-full py-4"
        @onChange="onChange"
    ></ShowdownEditor>
    <ShowdownPreview
        :content="content"
        class="lg:w-6/12 w-full py-4 px-5 overflow-auto scroll lg:block"
    ></ShowdownPreview>
  </div>
</template>


<style lang="scss">
.CodeMirror, .CodeMirror-wrap {
  height: 100% !important;
}
</style>