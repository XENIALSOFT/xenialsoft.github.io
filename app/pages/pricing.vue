<script setup lang="ts">
import { pricingPage } from '~/data/pricing'

const page = pricingPage

useMarketingSeo({
  ...page.seo,
  schema: 'pricing',
  faq: page.faq.items,
})
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

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

    <UContainer>
      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in page.plans"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :features="plan.features"
          :button="plan.button"
          :highlight="plan.highlight"
          :scale="plan.scale"
          :price="plan.price.amount"
          :billing-cycle="plan.price.suffix"
        />
      </UPricingPlans>
    </UContainer>

    <UPageSection
      :title="page.maintenance.title"
      :description="page.maintenance.description"
    >
      <div class="grid gap-4 max-w-3xl mx-auto sm:grid-cols-2">
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
