<script setup lang="ts">
useSeoMeta({
  ogTitle: '(주)제니얼소프트',
  ogDescription: '최적의 기술력과 풍부한 프로젝트 경험으로 기업의 성장을 돕는 맞춤형 디지털 인프라를 구축합니다. 웹 서비스부터 복잡한 시스템 통합까지, 제니얼소프트가 함께합니다.',
  ogImage: 'https://xenialsoft.com/logo_light.png',
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 20ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.page-enter-active {
  animation-duration: 150ms;
  animation-name: fadeIn;
  animation-timing-function: linear;
  backface-visibility: hidden;
}

.page-leave-active {
  animation-name: fadeOut;
  animation-duration: 150ms;
}

@keyframes fadeIn {
  0% {
    opacity: 0.001;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.001;
  }
}
</style>
