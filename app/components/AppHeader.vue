<script setup lang="ts">
const route = useRoute()

const items = computed(() => [{
  label: '제품',
  to: '/products',
  active: route.path.startsWith('/products'),
}, {
  label: '요금',
  to: '/pricing',
  active: route.path.startsWith('/pricing'),
}, {
  label: '문의',
  to: '/contact',
  active: route.path.startsWith('/contact'),
}])
</script>

<template>
  <UHeader>
    <template #left>
      <AppLogo />
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />

      <UButton
        label="데모 보기"
        icon="i-lucide-external-link"
        color="primary"
        variant="soft"
        to="/products"
        class="hidden sm:inline-flex"
      />

      <UButton
        label="문의하기"
        color="primary"
        trailing-icon="i-lucide-arrow-right"
        to="/contact"
        class="hidden lg:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="데모 보기"
        color="primary"
        variant="soft"
        to="/products"
        block
        class="mb-3"
      />
      <UButton
        label="문의하기"
        color="primary"
        to="/contact"
        block
      />
    </template>
  </UHeader>
</template>
