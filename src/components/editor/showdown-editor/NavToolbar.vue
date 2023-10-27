<script setup>
import Button from "@/components/app/Button.vue";
import {markdownContent} from "@/utils/shared";

const
    actions = [
      {name: 'Undo - Ctrl + Z', id: 'undo', icon: 'mdi-undo'},
      {
        name: 'Redo - Ctrl + Shift + Z',
        id: 'redo',
        icon: 'mdi-redo',
        class: true,
      },
      {name: 'Bold - Ctrl + B', id: 'bold', icon: 'mdi-format-bold'},
      {name: 'Italic - Ctrl + I', id: 'italic', icon: 'mdi-format-italic'},
      {name: 'Strikethrough - Ctrl + D', id: 'strike', icon: 'mdi-format-strikethrough'},
      {
        name: 'Heading',
        id: 'heading',
        icon: 'mdi-format-header-1',
        class: true,
      },
      {name: 'Unordered List', id: 'unordered-list', icon: 'mdi-format-list-bulleted'},
      {name: 'Ordered List', id: 'ordered-list', icon: 'mdi-format-list-numbered'},
      {
        name: 'Check list',
        id: 'check-list',
        icon: 'mdi-format-list-checks',
        class: true,
      },
      {name: 'Blockquote', id: 'blockquote', icon: 'mdi-format-quote-close'},
      {name: 'Link', id: 'link', icon: 'mdi-link'},
      {name: 'Image', id: 'image', icon: 'mdi-image'},
      {name: 'Table', id: 'table', icon: 'mdi-table'},
    ];

function insertText(id) {
  const { CodeMirror: cm } = document.querySelector('.CodeMirror');

  if (id === 'undo' || id === 'redo') {
    cm.execCommand(id);
  } else {
    const value = markdownContent[id];

    const selectedText = cm.getSelection();

    cm.doc.replaceSelection(value.replace(/\$text/, selectedText || id));
  }

  cm.focus();
}
</script>

<template>
  <div class="toolbar overflow-auto scroll whitespace-nowrap py-2">
    <Button
        v-for="action in actions"
        :key="action.id"
        plain
        class="mr-1"
        color="hover:bg-gray-100 hover:bg-opacity-5"
        icon
        @click="insertText(action.id)"
    >
      <v-mdi :name="action.icon" size="20"></v-mdi>
    </Button>
  </div>
</template>

<style scoped lang="scss">

</style>