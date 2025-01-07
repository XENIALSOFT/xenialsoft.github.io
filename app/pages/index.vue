<script setup lang="ts"></script>

<template>
  <div class="container prose mx-auto text-center">
    <h1>(주)제니얼소프트</h1>
    <h5>
      제니얼소프트는 웹 외주 개발을 전문으로 하고 있습니다.
      <br>
      고품질과 기술력을 바탕으로 개발 프로젝트를 수행하고 있습니다.
    </h5>
    <h3 class="mt-12">
      수행 가능한 개발 환경
    </h3>
    <div class="flex flex-col items-center gap-4 sm:flex-row">
      <div class="flip">
        <div class="card">
          <div class="front">
            FrontEnd
          </div>
          <div class="back">
            JavaScript<br>
            JQuery<br>
            Vue
          </div>
        </div>
      </div>
      <div class="flip">
        <div class="card">
          <div class="front">
            BackEnd
          </div>
          <div class="back">
            Java<br>
            SpringBoot
          </div>
        </div>
      </div>
      <div class="flip">
        <div class="card">
          <div class="front">
            DB
          </div>
          <div class="back">
            Oracle<br>
            MariaDB<br>
            MySQL
          </div>
        </div>
      </div>
    </div>
    <h3 class="mt-12">
      프로젝트 문의
    </h3>
    <div>
      xenialsoft@xenialsoft.com
    </div>
  </div>
</template>

<style>
.flip {
  width: 200px;
  height: 250px;
}
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.7s;
  transform-style: preserve-3d;
}
.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  @apply content-center font-bold;
}
.front {
  background: rgb(245, 245, 245);
}
.back {
  background: #9ff7ff;
  transform: rotateY(180deg);
}
.flip:hover .card {
  transform: rotateY(180deg);
}
</style>
