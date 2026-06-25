<script setup lang="ts">
import type { ChangelogEntry } from '~/types/site';
import { formatChangelogDate, getChangelogScopeLabel } from '~/data/changelog';

defineProps<{
  entries: ChangelogEntry[];
  showScope?: boolean;
}>();

/** 템플릿과 동일한 타임라인 UI — lg 미만에서는 날짜가 헤더에 표시됩니다. */
const versionUi = {
  root: 'flex items-start lg:gap-8',
  container: 'max-w-xl min-w-0 w-full',
  header: 'border-b border-default pb-4',
  title: 'text-2xl sm:text-3xl',
  date: 'text-xs/9 text-highlighted font-mono',
  // hidden lg:flex 유지 — 모바일에서 사이드 타임라인 숨김 (템플릿 기본 동작)
  indicator: 'hidden lg:flex sticky top-16 z-[1] w-32 shrink-0 items-center justify-end gap-3 pt-8 -mt-8 sm:pt-12 sm:-mt-12 lg:pt-16 lg:-mt-16',
} as const;

const versionsUi = {
  root: 'py-10 sm:py-16 lg:py-32',
  indicator: 'inset-y-0',
} as const;
</script>

<template>
  <div
    v-if="entries.length === 0"
    class="py-10 sm:py-16 text-center"
  >
    <p class="text-muted">
      아직 등록된 업데이트 내역이 없습니다.
    </p>
  </div>

  <UChangelogVersions
    v-else
    :indicator-motion="false"
    :ui="versionsUi"
  >
    <UChangelogVersion
      v-for="entry in entries"
      :key="entry.id"
      :title="entry.title"
      :date="entry.date"
      :description="entry.summary"
      :ui="versionUi"
    >
      <template #date>
        {{ formatChangelogDate(entry.date) }}
      </template>

      <template
        v-if="showScope"
        #title
      >
        <UBadge
          color="neutral"
          variant="subtle"
          size="sm"
          class="mb-2"
        >
          {{ getChangelogScopeLabel(entry.scope) }}
        </UBadge>
        <h2 class="text-2xl font-semibold text-highlighted sm:text-3xl">
          {{ entry.title }}
        </h2>
      </template>

      <template #body>
        <div class="space-y-5 pt-5 sm:space-y-6 sm:pt-6">
          <div
            v-for="group in entry.groups"
            :key="group.label"
          >
            <h4 class="mb-2 text-base font-semibold text-highlighted sm:mb-3 sm:text-lg">
              {{ group.label }}
            </h4>
            <ul class="space-y-2 text-sm text-muted">
              <li
                v-for="(item, index) in group.items"
                :key="index"
                class="flex gap-2"
              >
                <span class="shrink-0 text-primary">·</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </UChangelogVersion>
  </UChangelogVersions>
</template>
