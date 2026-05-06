<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core';

await promiseTimeout(1200);
</script>

<template>
  <div class="flex flex-col grow container mx-auto">
    <section class="flex flex-col grow items-center justify-center p-4">
      <h1 class="text-2xl font-bold mb-8 sm:text-6xl">
        함께 새로운 가치를 만들어가요
      </h1>
      <p class="text-center text-base text-base-content max-w-2xl sm:text-xl">
        성공적인 비즈니스 파트너십을 위한 첫 걸음,<br class="sm:hidden">
        <span class="text-secondary">제니얼소프트</span>에게 문의하세요.
      </p>
      <div class="mt-8 sm:mt-16 w-full max-w-xl">
        <div class="card card-side bg-base-100 border-2 border-secondary/20 transition duration-150 hover:border-secondary">
          <div class="flex justify-center items-center ps-4 sm:ps-6">
            <div class="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-secondary/20 rounded">
              <NuxtIcon
                name="material-symbols-light:stacked-email-rounded"
                class="text-xl sm:text-3xl text-secondary"
              />
            </div>
          </div>
          <div class="card-body justify-center p-4 sm:p-6">
            <p class="text-base-content">
              이메일 문의
            </p>
            <p>
              <a
                class="text-base sm:text-lg font-semibold hover:text-secondary"
                href="mailto:xenialsoft@xenialsoft.com"
              >
                xenialsoft@xenialsoft.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
