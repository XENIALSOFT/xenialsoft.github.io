<script setup lang="ts">
import type { ProductPricingPageData } from '~/types/site';
import { pricingAddOns } from '~/data/pricing/shared';

const props = defineProps<{
  page: ProductPricingPageData;
}>();

const primaryScreenshot = computed(() => props.page.screenshots[0]);
const detailScreenshots = computed(() => props.page.screenshots.slice(1));
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

    <UContainer class="pb-8">
      <div
        class="grid gap-8 max-w-6xl mx-auto lg:grid-cols-[3fr_2fr] lg:gap-10 lg:items-stretch"
      >
        <div
          v-if="primaryScreenshot"
          class="space-y-3"
        >
          <ProductScreenshot
            fill
            :src="primaryScreenshot.src"
            :alt="primaryScreenshot.alt"
          />
          <p class="text-sm text-muted text-center text-pretty lg:text-left">
            {{ primaryScreenshot.caption }}
          </p>
        </div>

        <UCard
          class="h-full"
          :class="!primaryScreenshot && 'max-w-2xl mx-auto lg:col-span-2'"
          :ui="{ root: 'h-full', body: 'flex h-full flex-col gap-6 p-6 sm:p-8' }"
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

          <div class="mt-auto flex flex-col gap-2">
            <UButton
              label="문의하기"
              to="/contact"
              trailing-icon="i-lucide-arrow-right"
              block
            />
            <UButton
              v-if="page.status === 'available' && page.preview"
              label="데모 보기"
              :to="page.preview"
              target="_blank"
              icon="i-lucide-external-link"
              color="neutral"
              variant="outline"
              block
            />
          </div>
        </UCard>
      </div>
    </UContainer>

    <UPageSection
      v-if="detailScreenshots.length"
      title="화면 구성"
      description="포함 범위에 해당하는 화면 예시입니다. 실제 납품 시 클리닉에 맞게 디자인·구성합니다."
    >
      <div
        class="grid w-full gap-8 max-w-5xl mx-auto"
        :class="detailScreenshots.length > 1 ? 'sm:grid-cols-2' : 'max-w-2xl'"
      >
        <div
          v-for="(shot, index) in detailScreenshots"
          :key="index"
          class="w-full min-w-0 space-y-3"
        >
          <ProductScreenshot
            :src="shot.src"
            :alt="shot.alt"
          />
          <p class="text-sm text-muted text-center text-pretty">
            {{ shot.caption }}
          </p>
        </div>
      </div>
    </UPageSection>

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
