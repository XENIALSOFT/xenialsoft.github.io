<script setup lang="ts">
import type { ProductPricingPageData } from '~/types/site';
import { pricingAddOns } from '~/data/pricing/shared';

defineProps<{
  page: ProductPricingPageData;
}>();
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

    <UContainer>
      <UCard
        class="max-w-2xl mx-auto"
        :ui="{ body: 'space-y-6 p-6 sm:p-8' }"
      >
        <ProductPriceDisplay
          :price="page.price"
          size="lg"
        />

        <USeparator />

        <div class="space-y-2">
          <p class="font-medium text-highlighted">
            {{ page.reservation.label }}
          </p>
          <p class="text-sm text-muted">
            {{ page.reservation.description }}
          </p>
        </div>

        <UButton
          label="문의하기"
          to="/contact"
          trailing-icon="i-lucide-arrow-right"
          block
        />
      </UCard>
    </UContainer>

    <UPageSection
      title="포함 내용"
      description="이 제품 정가에 포함되는 항목입니다."
    >
      <ul class="max-w-2xl mx-auto space-y-3">
        <li
          v-for="(feature, index) in page.includedFeatures"
          :key="index"
          class="flex items-start gap-3 text-sm sm:text-base text-muted"
        >
          <UIcon
            name="i-lucide-check"
            class="size-5 shrink-0 text-primary mt-0.5"
          />
          <span>{{ feature }}</span>
        </li>
      </ul>
    </UPageSection>

    <UPageSection
      :title="pricingAddOns.title"
      :description="pricingAddOns.description"
    >
      <ul class="max-w-2xl mx-auto space-y-3">
        <li
          v-for="(item, index) in page.notIncluded"
          :key="index"
          class="flex items-start gap-3 text-sm sm:text-base text-muted"
        >
          <UIcon
            name="i-lucide-minus"
            class="size-5 shrink-0 text-muted mt-0.5"
          />
          <span>{{ item }}</span>
        </li>
      </ul>
    </UPageSection>

    <UPageSection
      :title="page.model.title"
      :description="page.model.description"
    >
      <div class="grid gap-4 max-w-3xl mx-auto sm:grid-cols-3">
        <UCard
          v-for="(step, index) in page.model.steps"
          :key="index"
          :ui="{ body: 'space-y-2' }"
        >
          <p class="font-medium text-highlighted">
            {{ step.title }}
          </p>
          <p class="text-sm text-muted">
            {{ step.description }}
          </p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      :title="page.maintenance.title"
      :description="page.maintenance.description"
    >
      <div class="grid gap-4 max-w-3xl mx-auto sm:grid-cols-3">
        <UCard
          v-for="(item, index) in page.maintenance.items"
          :key="index"
          :ui="{ body: 'space-y-2' }"
        >
          <p class="font-medium text-highlighted">
            {{ item.label }}
          </p>
          <p class="text-sm text-muted">
            {{ item.description }}
          </p>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      :title="page.faq.title"
      :description="page.faq.description"
    >
      <UAccordion
        :items="page.faq.items"
        :unmount-on-hide="false"
        :default-value="['0']"
        type="multiple"
        class="max-w-3xl mx-auto"
        :ui="{
          trigger: 'text-base text-highlighted',
          body: 'text-base text-muted',
        }"
      />
    </UPageSection>
  </div>
</template>
