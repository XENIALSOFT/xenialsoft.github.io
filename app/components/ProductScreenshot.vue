<script setup lang="ts">
defineProps<{
  src?: string;
  alt: string;
}>();
</script>

<template>
  <UPageCard variant="subtle">
    <div class="overflow-hidden rounded-lg border border-default bg-elevated/50 shadow-sm">
      <div class="flex items-center gap-1.5 border-b border-default px-4 py-2.5">
        <span class="size-2.5 rounded-full bg-error/80" />
        <span class="size-2.5 rounded-full bg-warning/80" />
        <span class="size-2.5 rounded-full bg-success/80" />
      </div>

      <div class="relative aspect-[16/10]">
        <img
          v-if="src"
          :src="src"
          :alt="alt"
          class="size-full object-cover object-left-top"
        >
        <div
          v-else
          class="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/30 px-4"
        >
          <svg
            class="absolute inset-0 size-full stroke-accented/20"
            fill="none"
          >
            <defs>
              <pattern
                id="product-screenshot-pattern"
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
              fill="url(#product-screenshot-pattern)"
              width="100%"
              height="100%"
            />
          </svg>
          <UIcon
            name="i-lucide-image"
            class="relative size-8 text-muted"
          />
          <p class="relative text-sm text-muted text-center">
            스크린샷 준비 중
          </p>
        </div>
      </div>
    </div>
  </UPageCard>
</template>
