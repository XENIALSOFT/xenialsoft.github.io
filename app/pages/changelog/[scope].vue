<script setup lang="ts">
import {
  getChangelogEntriesForScope,
  getChangelogScopeLabel,
  getChangelogScopePage,
} from '~/data/changelog';
import { isProductId, productPackages } from '~/data/templates';

const route = useRoute();
const scopeParam = String(route.params.scope);
const page = getChangelogScopePage(scopeParam);

if (!page) {
  throw createError({
    statusCode: 404,
    statusMessage: '업데이트 페이지를 찾을 수 없습니다.',
  });
}

const entries = getChangelogEntriesForScope(page.scope);
const scopeName = getChangelogScopeLabel(page.scope);

const heroLinks = computed(() => {
  const links = [{
    label: '업데이트 목록',
    icon: 'i-lucide-arrow-left',
    to: '/changelog',
    variant: 'ghost' as const,
    size: 'md' as const,
  }];

  if (isProductId(page.scope)) {
    const product = productPackages[page.scope];
    if (product.preview) {
      links.push({
        label: '데모 보기',
        icon: 'i-lucide-external-link',
        to: product.preview,
        target: '_blank',
        variant: 'ghost' as const,
        size: 'md' as const,
      });
    }
  }
  else {
    links.push({
      label: '데모 보기',
      icon: 'i-lucide-external-link',
      to: 'https://admin.xenialsoft.com',
      target: '_blank',
      variant: 'ghost' as const,
      size: 'md' as const,
    });
  }

  return links;
});

useMarketingSeo({
  ...page.seo,
  schema: 'changelog',
});
</script>

<template>
  <!-- 템플릿: xl 이상 2열, 모바일·태블릿은 소개 → 내역 순서로 세로 스택 -->
  <div class="min-h-0 xl:grid xl:grid-cols-2">
    <UPageSection
      :title="page.title"
      :description="page.description"
      orientation="vertical"
      :links="heroLinks"
      :ui="{
        root: 'border-b border-default xl:border-b-0 xl:sticky xl:top-16 xl:h-[calc(100dvh-4rem)] xl:overflow-hidden',
        container: 'py-10 sm:py-16 xl:h-full xl:items-center xl:justify-center xl:py-0',
        wrapper: 'flex flex-col',
        headline: 'mb-4 sm:mb-6',
        title: 'text-left text-3xl sm:text-4xl',
        description: 'text-left max-w-lg text-sm sm:text-base',
        links: 'gap-1 justify-start -ms-2.5',
      }"
    >
      <template #top>
        <LazyStarsBg />

        <div
          aria-hidden="true"
          class="absolute -right-1/2 z-[-1] rounded-full bg-primary blur-[300px] size-60 sm:size-100 transform -translate-y-1/2 top-1/2"
        />
      </template>

      <template #headline>
        <nav
          class="flex flex-wrap items-center gap-2 text-sm text-muted"
          aria-label="업데이트 breadcrumb"
        >
          <NuxtLink
            to="/changelog"
            class="hover:text-highlighted transition-colors"
          >
            업데이트
          </NuxtLink>
          <UIcon
            name="i-lucide-chevron-right"
            class="size-4 shrink-0"
          />
          <span class="text-highlighted font-medium">
            {{ scopeName }}
          </span>
        </nav>
      </template>

      <template #default />
    </UPageSection>

    <section class="min-w-0 px-4 sm:px-6 xl:-ms-30 xl:flex-1 xl:px-0">
      <ChangelogTimeline :entries="entries" />
    </section>
  </div>
</template>
