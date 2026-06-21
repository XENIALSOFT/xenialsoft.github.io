<script setup lang="ts">
import { indexPage } from '~/data/index'

const page = indexPage

useMarketingSeo({
  ...page.seo,
  titleTemplate: '',
  schema: 'home',
})
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.hero.links"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template
        v-if="page.hero.badge"
        #headline
      >
        <UBadge
          color="primary"
          variant="subtle"
          size="lg"
        >
          {{ page.hero.badge }}
        </UBadge>
      </template>

      <template #title>
        <p>
          {{ page.title }}<span class="text-primary">{{ page.titleHighlight }}</span>
        </p>
      </template>

      <ImagePlaceholder />
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <ImagePlaceholder />
    </UPageSection>

    <UPageSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
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
