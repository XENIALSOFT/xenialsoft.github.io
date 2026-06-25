<script setup lang="ts">
import type { ChangelogScopeCard } from '~/types/site';

defineProps<{
  scope: ChangelogScopeCard;
}>();
</script>

<template>
  <UCard
    variant="subtle"
    :ui="{ body: 'flex flex-col gap-4 p-5 sm:p-6 h-full' }"
  >
    <div class="flex items-start gap-3">
      <div class="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
        <UIcon
          :name="scope.icon"
          class="size-5 text-primary"
        />
      </div>
      <div class="min-w-0 space-y-1">
        <div class="flex flex-wrap items-center gap-2">
          <p class="font-semibold text-highlighted">
            {{ scope.name }}
          </p>
          <UBadge
            color="neutral"
            variant="subtle"
            size="sm"
          >
            {{ scope.tagline }}
          </UBadge>
        </div>
        <p class="text-sm text-muted">
          {{ scope.description }}
        </p>
      </div>
    </div>

    <div class="mt-auto pt-1">
      <UButton
        label="업데이트 보기"
        :to="scope.to"
        trailing-icon="i-lucide-arrow-right"
        color="primary"
        block
      />
    </div>
  </UCard>
</template>
