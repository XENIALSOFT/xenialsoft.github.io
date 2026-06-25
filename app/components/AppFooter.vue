<script setup lang="ts">
import { currentVertical } from '~/data/seo';
import { productDemoUrls, productList } from '~/data/templates';

const columns = [{
  label: '제품',
  children: [{
    label: '제품 소개',
    to: '/products',
  }, ...productList.map(product => ({
    label: `${product.name} 데모`,
    to: productDemoUrls[product.id],
    target: '_blank',
  })), {
    label: '관리자 화면 데모',
    to: 'https://admin.xenialsoft.com',
    target: '_blank',
  }],
}, {
  label: '회사',
  children: [{
    label: '요금',
    to: '/pricing',
  }, {
    label: '업데이트',
    to: '/changelog',
  }, {
    label: '문의',
    to: '/contact',
  }],
}];
</script>

<template>
  <USeparator class="h-px" />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <div class="space-y-2">
              <p class="text-sm font-medium text-highlighted">
                업종별 디지털 인프라
              </p>
              <p class="text-sm text-muted max-w-sm">
                {{ currentVertical.label }}용 고객 홈페이지와 관리자 화면을 한 세트로 제공합니다.
              </p>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} XENIALSOFT Inc. · All rights reserved.
      </p>
    </template>

    <template #right>
      <UButton
        to="mailto:xenialsoft@xenialsoft.com"
        icon="i-lucide-mail"
        aria-label="이메일 문의"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
