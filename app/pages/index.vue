<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core';

await promiseTimeout(3000);
</script>

<template>
  <div>
    Hello, Nuxt!
  </div>
  <div class="border-4 border-red-600">
    Hello, XENIALSOFT!
  </div>
  <div>
    <button class="btn">
      Button
    </button>
  </div>
</template>
