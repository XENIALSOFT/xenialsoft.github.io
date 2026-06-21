<script setup lang="ts">
import { contactPage } from '~/data/contact'

const page = contactPage
const mailto = `mailto:${page.email.address}`

useMarketingSeo({
  ...page.seo,
  schema: 'contact',
})
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

    <UPageSection
      :title="page.email.title"
      :description="page.email.description"
    >
      <UCard
        class="max-w-lg mx-auto"
        variant="subtle"
        :ui="{ body: 'flex flex-col sm:flex-row sm:items-center gap-6 p-6 sm:p-8' }"
      >
        <div class="flex items-center justify-center size-14 rounded-xl bg-primary/10 shrink-0 mx-auto sm:mx-0">
          <UIcon
            :name="page.email.icon"
            class="size-7 text-primary"
          />
        </div>

        <div class="flex-1 min-w-0 space-y-4 text-center sm:text-left">
          <div>
            <p class="text-sm text-muted mb-1">
              이메일
            </p>
            <ULink
              :to="mailto"
              class="text-lg sm:text-xl font-semibold text-highlighted hover:text-primary break-all"
            >
              {{ page.email.address }}
            </ULink>
          </div>

          <UButton
            :to="mailto"
            label="메일 보내기"
            trailing-icon="i-lucide-arrow-right"
            color="primary"
            class="w-full sm:w-auto"
          />
        </div>
      </UCard>
    </UPageSection>

    <UPageSection
      :title="page.checklist.title"
      :description="page.checklist.description"
    >
      <div class="grid gap-4 max-w-2xl mx-auto">
        <UCard
          v-for="(item, index) in page.checklist.items"
          :key="index"
          variant="subtle"
          :ui="{ body: 'flex items-start gap-4 p-4 sm:p-5' }"
        >
          <div class="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
            <UIcon
              name="i-lucide-check"
              class="size-5 text-primary"
            />
          </div>
          <div class="min-w-0 space-y-1">
            <p class="font-medium text-highlighted">
              {{ item.label }}
            </p>
            <p class="text-sm text-muted">
              {{ item.hint }}
            </p>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <USeparator />

    <UPageCTA
      v-bind="page.cta"
      variant="naked"
      class="overflow-hidden"
    >
      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
