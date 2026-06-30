<script setup lang="ts">
defineProps<{
  src?: string;
  alt?: string;
}>();
</script>

<template>
  <UPageCard variant="subtle">
    <div
      class="relative overflow-hidden rounded-lg border border-default bg-elevated/50 shadow-sm"
      :class="src ? 'aspect-video' : 'rounded-sm border-dashed border-accented opacity-75 px-4 flex items-center justify-center aspect-video'"
    >
      <img
        v-if="src"
        :src="src"
        :alt="alt"
        class="size-full object-cover"
      >

      <template v-else>
        <svg
          class="absolute inset-0 h-full w-full stroke-inverted/10"
          fill="none"
        >
          <defs>
            <pattern
              id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
            </pattern>
          </defs>
          <rect
            stroke="none"
            fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
            width="100%"
            height="100%"
          />
        </svg>

        <slot />
      </template>
    </div>
  </UPageCard>
</template>
