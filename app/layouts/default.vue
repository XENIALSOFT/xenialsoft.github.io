<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex flex-col grow">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="css" scoped>

</style>
