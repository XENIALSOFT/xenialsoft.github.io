<script setup lang="ts">
const title = ref(`(주)제니얼소프트 | XENIALSOFT Inc.`);
// useHead({
//   title,
// });
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtWelcome :title />
    <!-- <NuxtLayout>
      <NuxtPage />
    </NuxtLayout> -->
  </div>
</template>
