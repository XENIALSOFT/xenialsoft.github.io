<script setup lang="ts">
import type { ProductPriceDisplay } from '~/types/site';

defineProps<{
  price: ProductPriceDisplay;
  size?: 'md' | 'lg';
}>();
</script>

<template>
  <div :class="size === 'lg' ? 'space-y-2' : 'space-y-1'">
    <p
      class="font-semibold text-highlighted"
      :class="size === 'lg' ? 'text-3xl sm:text-4xl' : 'text-2xl'"
    >
      {{ price.listAmount }}
    </p>
    <p class="text-sm text-muted">
      {{ price.suffix }}
    </p>
    <p
      class="text-sm text-primary"
      :class="size === 'lg' ? 'mt-3' : 'mt-2'"
    >
      {{ price.discountNote }}
    </p>
  </div>
</template>
