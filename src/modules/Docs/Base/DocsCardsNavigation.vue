<script setup>

import BaseCard from "@/components/Docs/Base/Card/BaseCard.vue";
import Title from "@/components/Docs/Base/Title.vue";
</script>

<template>
  <div class="padding-block-xl">
    <Title title="Resource" />
    <ul class="grid is-3 gap-md gap-lg-desktop margin-top-lg">
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Diese Website hilft studentischen Unternehmer*innen und Technologie-Enthusiasten wie Ihnen, Ihr technisches Wissen und Ihre Fähigkeiten im transformativen Bereich der KI zu erweitern. Gehen Sie die KI-Grundlagen hinaus, bleiben Sie über die neuesten KI-Fortschritte auf dem Laufenden, und üben Sie KI-fähige Programmierung, um zu lernen und Ihre unternehmerischen Vorhaben voranzutreiben." />
      </li>
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Description" />
      </li>
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Description" />
      </li>
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Description" />
      </li>
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Description" />
      </li>
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Description" />
      </li>
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Description" />
      </li>
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Description" />
      </li>
      <li class="grid-item">
        <BaseCard title="Test" url="https://example.com" description="Description" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-column-gap: 1rem;
  row-gap: 1rem;

  &.is-3 {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }

  &.gap-md {
    gap: 2rem;
  }

}


</style>