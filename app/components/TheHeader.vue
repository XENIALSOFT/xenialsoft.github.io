<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const mode = useColorMode({
  attribute: 'data-theme',
  disableTransition: false,
});

const isDark = computed({
  get: () => mode.value === 'dark',
  set: (value: boolean) => {
    mode.value = value ? 'dark' : 'light';
  },
});
</script>

<template>
  <header class="bg-base-100/90 text-base-content sticky top-0 z-30 flex h-16 w-full transform-[translate3d(0,0,0)] justify-center backdrop-blur transition-shadow duration-100 shadow-xs">
    <nav class="container mx-auto navbar px-4">
      <div class="navbar-start">
        <NuxtLink
          class="text-lg sm:text-2xl font-bold"
          to="/"
        >
          XENIAL<span class="text-secondary">SOFT</span>
        </NuxtLink>
      </div>
      <div class="navbar-center" />
      <div class="navbar-end">
        <label class="swap swap-rotate">
          <!-- this hidden checkbox controls the state -->
          <input
            v-model="isDark"
            type="checkbox"
            class="theme-controller"
            value="synthwave"
          >

          <!-- sun icon -->
          <NuxtIcon
            name="material-symbols-light:sunny-outline-rounded"
            class="swap-off text-2xl fill-current"
          />

          <!-- moon icon -->
          <NuxtIcon
            name="material-symbols-light:moon-stars-outline-rounded"
            class="swap-on text-2xl fill-current"
          />
        </label>
      </div>
    </nav>
  </header>
</template>
