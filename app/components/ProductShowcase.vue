<script setup lang="ts">
import type { ProductItem } from '~/types/site';

defineProps<{
  product: ProductItem;
}>();
</script>

<template>
  <section class="py-16 sm:py-24">
    <UContainer>
      <div
        class="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center"
        :class="product.reverse && 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'"
      >
        <ProductScreenshot
          :src="product.screenshot"
          :alt="`${product.name} 스크린샷`"
        />

        <div class="space-y-6">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <p class="text-sm font-semibold text-primary">
                {{ product.name }}
              </p>
              <UBadge
                v-if="product.badge"
                :color="product.status === 'available' ? 'primary' : 'neutral'"
                variant="subtle"
                size="sm"
              >
                {{ product.badge }}
              </UBadge>
            </div>

            <h2 class="text-2xl sm:text-3xl font-semibold text-highlighted text-pretty">
              {{ product.title }}
            </h2>

            <p class="text-base text-muted text-pretty">
              {{ product.description }}
            </p>
            <p
              v-if="product.listPrice"
              class="text-sm text-muted"
            >
              정가 {{ product.listPrice }} (초기 구축, VAT 별도)
            </p>
          </div>

          <ul class="space-y-3">
            <li
              v-for="(feature, index) in product.features"
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

          <div
            v-if="product.status === 'available'"
            class="flex flex-wrap gap-2 pt-1"
          >
            <UButton
              v-if="product.pricingPath"
              :to="product.pricingPath"
              label="요금 보기"
              trailing-icon="i-lucide-arrow-right"
              color="primary"
            />
            <UButton
              v-if="product.preview"
              :to="product.preview"
              target="_blank"
              label="데모 보기"
              icon="i-lucide-eye"
              :color="product.pricingPath ? 'neutral' : 'primary'"
              :variant="product.pricingPath ? 'subtle' : undefined"
            />
            <UButton
              v-if="product.changelogPath"
              :to="product.changelogPath"
              label="업데이트"
              icon="i-lucide-history"
              color="neutral"
              variant="subtle"
            />
            <UButton
              to="/contact"
              label="문의하기"
              color="neutral"
              variant="subtle"
              trailing-icon="i-lucide-arrow-right"
            />
          </div>
          <UButton
            v-else
            label="준비 중"
            icon="i-lucide-clock"
            color="neutral"
            variant="subtle"
            disabled
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
