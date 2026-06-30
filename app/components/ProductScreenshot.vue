<script setup lang="ts">
defineProps<{
  src?: string;
  alt: string;
  /** 그리드 등에서 옆 요소와 세로 높이를 맞출 때 사용 */
  fill?: boolean;
}>();
</script>

<template>
  <UPageCard
    variant="subtle"
    class="w-full max-w-none"
    :class="fill && 'h-full'"
    :ui="{
      root: fill ? 'w-full max-w-none h-full' : 'w-full max-w-none',
      ...(fill ? { body: 'h-full' } : {}),
    }"
  >
    <div
      class="w-full overflow-hidden rounded-lg border border-default bg-elevated/50 shadow-sm"
      :class="fill && 'flex h-full flex-col'"
    >
      <div class="flex items-center gap-1.5 border-b border-default px-4 py-2.5">
        <span class="size-2.5 rounded-full bg-error/80" />
        <span class="size-2.5 rounded-full bg-warning/80" />
        <span class="size-2.5 rounded-full bg-success/80" />
      </div>

      <div
        class="relative w-full bg-muted/20"
        :class="fill
          ? 'relative min-h-[280px] h-full flex-1 sm:min-h-[320px]'
          : 'relative aspect-[16/10]'"
      >
        <img
          v-if="src"
          :src="src"
          :alt="alt"
          class="size-full object-contain object-center"
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
