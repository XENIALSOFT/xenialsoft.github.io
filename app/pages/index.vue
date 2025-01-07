<script setup lang="ts">
const devEnvData = ref([
  {
    title: 'FrontEnd',
    contents: ['JavaScript', 'JQuery', 'Vue'],
  },
  {
    title: 'BackEnd',
    contents: ['Java', 'SpringBoot'],
  },
  {
    title: 'DB',
    contents: ['Oracle', 'MariaDB', 'MySQL'],
  },
]);
</script>

<template>
  <div
    class="container prose m-auto flex h-full flex-col justify-around gap-y-32 text-center"
  >
    <div class="flex-grow" />
    <section>
      <h1>(주)제니얼소프트</h1>
      <h5>
        제니얼소프트는 웹 외주 개발을 전문으로 하고 있습니다.
        <br>
        고품질과 기술력을 바탕으로 개발 프로젝트를 수행하고 있습니다.
      </h5>
    </section>
    <section>
      <h3>수행 가능한 개발 환경</h3>
      <div class="flex flex-col items-center gap-4 sm:flex-row">
        <div
          v-for="(data, idx) of devEnvData"
          :key="idx"
          class="flip"
        >
          <div class="flip-card">
            <div class="flip-card-front">
              {{ data.title }}
            </div>
            <div class="flip-card-back">
              <span
                v-for="subdata of data.contents"
                :key="subdata"
              >
                {{ subdata }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h3>프로젝트 문의</h3>
      <div>xenialsoft@xenialsoft.com</div>
    </section>
    <div class="flex-grow" />
  </div>
</template>

<style></style>
