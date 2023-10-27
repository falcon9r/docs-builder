<script setup>
import { onMounted, ref } from "vue";
import showdown from "../../../../lib/showdown";
import markdownTheme from '../../../../assets/markdown.scss?inline';
import highlightTheme from 'highlight.js/styles/atom-one-dark.css?inline';

console.log(markdownTheme);

const containerPreview = ref(null);


function createPreview(value) {
  const content = showdown.makeHtml(value);
  let contentContainer = `<div class="preview-content">${content}</div> ` + `<style>${highlightTheme}${markdownTheme}</style>`;
  if (containerPreview.value) {
    containerPreview.value.attachShadow({ mode: 'open' });
    containerPreview.value.shadowRoot.innerHTML = contentContainer;
  }
}

onMounted(() => {

  fetch("/index.md")
      .then((response) => response.text())
      .then((text) => {
          createPreview(text);
      });
});

</script>

<template>
  <div class="container preview-container" ref="containerPreview">
  </div>
</template>

<style scoped lang="css">
/* Your CSS styles here */
</style>
