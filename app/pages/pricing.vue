<script setup lang="ts">
import type { PlanFeatureStatus } from '~/data/plans';
import { formatPlanFeatureCell, planColumnOrder } from '~/data/plans';
import { pricingPage } from '~/data/pricing';

const page = pricingPage;

function statusTone(status: PlanFeatureStatus): string {
  switch (status) {
    case 'included':
      return 'text-primary';
    case 'once':
      return 'text-amber-600 dark:text-amber-400';
    case 'custom':
      return 'text-highlighted';
    default:
      return 'text-muted';
  }
}

useMarketingSeo({
  ...page.seo,
  schema: 'pricing',
  faq: page.faq.items,
});
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

    <UPageSection
      :title="page.productModel.title"
      :description="page.productModel.description"
    >
      <div class="grid gap-4 max-w-4xl mx-auto sm:grid-cols-2">
        <UCard
          v-for="(item, index) in page.productModel.items"
          :key="index"
          variant="subtle"
          :ui="{ body: 'flex gap-4 p-5' }"
        >
          <div class="flex items-center justify-center size-10 rounded-lg bg-primary/10 shrink-0">
            <UIcon
              :name="item.icon"
              class="size-5 text-primary"
            />
          </div>
          <div class="min-w-0 space-y-1">
            <p class="font-medium text-highlighted">
              {{ item.title }}
            </p>
            <p class="text-sm text-muted">
              {{ item.description }}
            </p>
          </div>
        </UCard>
      </div>
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
      :title="page.featureComparison.title"
      :description="page.featureComparison.description"
    >
      <UAlert
        color="neutral"
        variant="subtle"
        icon="i-lucide-info"
        :title="page.featureComparison.note"
        class="max-w-6xl mx-auto mb-8"
      />

      <div class="max-w-6xl mx-auto space-y-8">
        <div
          v-for="(group, groupIndex) in page.featureComparison.groups"
          :key="groupIndex"
          class="space-y-3"
        >
          <div>
            <h3 class="text-base font-semibold text-highlighted">
              {{ group.title }}
            </h3>
            <p
              v-if="group.description"
              class="mt-1 text-sm text-muted"
            >
              {{ group.description }}
            </p>
          </div>

          <div class="overflow-x-auto rounded-lg border border-default">
            <table class="min-w-full text-sm">
              <thead>
                <tr class="border-b border-default bg-elevated/50">
                  <th
                    scope="col"
                    class="px-3 py-3 text-left font-medium text-highlighted min-w-48"
                  >
                    기능
                  </th>
                  <th
                    v-for="column in planColumnOrder"
                    :key="column.key"
                    scope="col"
                    class="px-3 py-3 text-center font-medium text-highlighted min-w-22"
                  >
                    {{ column.label }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, rowIndex) in group.rows"
                  :key="rowIndex"
                  class="border-b border-default last:border-b-0"
                >
                  <th
                    scope="row"
                    class="px-3 py-3 text-left font-normal text-highlighted"
                  >
                    {{ row.label }}
                  </th>
                  <td
                    v-for="column in planColumnOrder"
                    :key="column.key"
                    class="px-3 py-3 text-center"
                  >
                    <span
                      class="font-medium text-xs sm:text-sm"
                      :class="statusTone(row[column.key])"
                    >
                      {{ formatPlanFeatureCell(column.key, row) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </UPageSection>

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
