<script setup>
import {defineProps, onMounted, ref, watch} from "vue";
import showdown from '@/lib/showdown';
import markdownTheme from '@/assets/scss/editor/markdown.css';
import highlightTheme from 'highlight.js/styles/atom-one-dark.css';

const props = defineProps({
  content: {
    type: String,
    required: true
  }
});

const container = ref(null);

watch(() => props.content, function (html) {
  const {shadowRoot} = container.value;
  const contentContainer = shadowRoot.querySelector('.preview-content');

  if (contentContainer) {
    contentContainer.innerHTML = content(html);
  }
})

function content(content) {
  return showdown.makeHtml(content || '');
}

onMounted(() => {
  let contentContainer = `<div class="preview-content">${content(props.content)}</div>`;
  contentContainer += `<style>${highlightTheme}${markdownTheme}</style>`;

  container.value.attachShadow({mode: 'open'});
  container.value.shadowRoot.innerHTML = contentContainer;
});

</script>

<template>
  <div class="preview-container" ref="container">
  </div>
</template>

<style scoped lang="scss">
</style>
