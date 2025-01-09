<script setup lang="ts">

</script>

<template>
  <div class="grid h-full grid-rows-[1fr_auto]">
    <TheHeader />
    <main class="pt-16">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
main {
  /* background-image: url('~/assets/images/pencils-762555_1920.webp'); */
  /* background-image: url('~/assets/images/construction-8574908_1920.webp'); */
  /* background-image: url('~/assets/images/despaired-2261021_1920.webp'); */
  /* background-image: url('~/assets/images/paperwork-5000691_1920.webp'); */
  /* background-size: cover; */
  /* background-position: center; */
  /* background-attachment: fixed; */
}
</style>
