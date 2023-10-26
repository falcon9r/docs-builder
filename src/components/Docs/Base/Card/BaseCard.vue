<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: URL,
    required: true
  }
})
</script>

<template>
  <article class="card border-left-lg">
    <div class="card-content">
      <a :href="url" class="card-title font-size-xl stretched-link">{{ title }}</a>
      <p class="card-content-description">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
  padding: 1.0rem;
  border: 1px solid #fff0;
  background-color: #091f2c;
}

.border-left-lg {
  border-inline-start: 0.25rem solid #404040;
}

.card-content {
  margin-block-start: -1rem;
  padding-block-start: 1rem;
  flex-grow: 1;
  margin-block-end: 1.125rem;
}

.card-title {
  background-color: #091f2c;
  color: #75b6e7;
  text-align: start;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  flex-grow: 1;
  grid-area: title;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25;
  text-decoration: none;
  -webkit-line-clamp: 3!important;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.card-content-description {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  max-height: inherit;
  padding-block-end: 0;
  font-size: .875rem;
  line-height: 1.25;
  -webkit-line-clamp: 4!important;
  margin-block-start: 0.5rem;
}
</style>