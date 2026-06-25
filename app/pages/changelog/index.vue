<script setup lang="ts">
import {
  changelogHubPage,
  getAllChangelogEntries,
} from '~/data/changelog';

const page = changelogHubPage;
const allEntries = getAllChangelogEntries();

useMarketingSeo({
  ...page.seo,
  schema: 'changelog',
});
</script>

<template>
  <div>
    <UPageHero
      :title="page.title"
      :description="page.description"
    />

    <UPageSection
      title="고객 홈페이지"
      description="풀기능형·모바일 허브형·간편 예약형 제품별 업데이트입니다."
    >
      <div class="grid gap-4 max-w-5xl mx-auto md:grid-cols-3">
        <ChangelogScopeCard
          v-for="scope in page.siteScopes"
          :key="scope.scope"
          :scope="scope"
        />
      </div>
    </UPageSection>

    <UPageSection
      title="관리자 화면"
      description="예약·회원·홍보·문의를 관리하는 화면 업데이트입니다."
      :ui="{ container: '!pt-0' }"
    >
      <div class="grid gap-4 max-w-5xl mx-auto md:grid-cols-3">
        <div class="md:col-start-2">
          <ChangelogScopeCard :scope="page.adminScope" />
        </div>
      </div>
    </UPageSection>

    <UPageSection
      title="전체 업데이트 내역"
      description="모든 제품·관리자 업데이트를 날짜순으로 모았습니다."
      :ui="{ container: '!pt-0' }"
    >
      <ChangelogTimeline
        :entries="allEntries"
        show-scope
      />
    </UPageSection>
  </div>
</template>
