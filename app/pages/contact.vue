<script setup lang="ts">
import { contactPage } from '~/data/contact';

const page = contactPage;
const mailto = `mailto:${page.email.address}`;

useMarketingSeo({
  ...page.seo,
  schema: 'contact',
});
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

    <UPageSection
      :ui="{ container: 'max-w-6xl' }"
    >
      <div class="space-y-16 lg:space-y-20">
        <div class="space-y-6">
          <div class="space-y-3 max-w-3xl">
            <h2 class="text-2xl sm:text-3xl font-semibold text-highlighted tracking-tight">
              {{ page.form.title }}
            </h2>
            <p class="text-base sm:text-lg text-muted leading-relaxed">
              {{ page.form.description }}
            </p>
          </div>

          <ContactForm :form="page.form" />
        </div>

        <div class="space-y-6">
          <div class="space-y-3 max-w-3xl">
            <h2 class="text-2xl sm:text-3xl font-semibold text-highlighted tracking-tight">
              {{ page.email.title }}
            </h2>
            <p class="text-base sm:text-lg text-muted leading-relaxed">
              {{ page.email.description }}
            </p>
          </div>

          <UCard
            class="w-full"
            variant="subtle"
            :ui="{
              root: 'ring ring-default',
              body: 'p-8 sm:p-10 lg:p-12',
            }"
          >
            <div class="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div class="flex items-center justify-center size-16 sm:size-20 rounded-2xl bg-primary/10 shrink-0">
                <UIcon
                  :name="page.email.icon"
                  class="size-8 sm:size-10 text-primary"
                />
              </div>

              <div class="flex-1 min-w-0 space-y-2">
                <p class="text-sm font-medium text-muted uppercase tracking-wide">
                  이메일
                </p>
                <ULink
                  :to="mailto"
                  class="text-xl sm:text-2xl lg:text-3xl font-semibold text-highlighted hover:text-primary break-all transition-colors"
                >
                  {{ page.email.address }}
                </ULink>
              </div>

              <UButton
                :to="mailto"
                label="메일 보내기"
                trailing-icon="i-lucide-arrow-right"
                color="primary"
                variant="outline"
                size="xl"
                class="w-full lg:w-auto shrink-0"
              />
            </div>
          </UCard>
        </div>
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
