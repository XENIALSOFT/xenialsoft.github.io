<script setup lang="ts">
import type { ContactPageData } from '~/types/site';
import { productList } from '~/data/templates';

const props = defineProps<{
  form: ContactPageData['form'];
}>();

const toast = useToast();
const { endpoint, submit } = useContactFormSubmit();

const state = reactive({
  name: '',
  email: '',
  business: '',
  product: undefined as string | undefined,
  features: '',
  schedule: '',
  message: '',
  website: '',
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const productOptions = computed(() =>
  productList
    .filter(product => product.status === 'available')
    .map(product => ({
      label: product.name,
      value: product.name,
    })),
);

async function onSubmit() {
  if (isSubmitting.value) {
    return;
  }

  isSubmitting.value = true;

  try {
    await submit({
      name: state.name,
      email: state.email,
      business: state.business,
      product: state.product ?? '',
      features: state.features,
      schedule: state.schedule,
      message: state.message,
      website: state.website,
    });
    isSubmitted.value = true;
    toast.add({
      title: props.form.successTitle,
      description: props.form.successDescription,
      color: 'success',
      icon: 'i-lucide-check-circle',
    });
  }
  catch (error) {
    toast.add({
      title: '전송에 실패했습니다',
      description: error instanceof Error ? error.message : '잠시 후 다시 시도해 주세요.',
      color: 'error',
      icon: 'i-lucide-alert-circle',
    });
  }
  finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <UCard
    class="w-full"
    variant="subtle"
    :ui="{
      root: 'ring ring-default',
      body: 'p-8 sm:p-10 lg:p-12',
    }"
  >
    <div
      v-if="isSubmitted"
      class="flex flex-col items-center justify-center text-center py-16 sm:py-20 lg:py-24 gap-8"
    >
      <div class="flex items-center justify-center size-20 sm:size-24 rounded-2xl bg-primary/10">
        <UIcon
          name="i-lucide-check-circle"
          class="size-10 sm:size-12 text-primary"
        />
      </div>
      <div class="space-y-3 max-w-lg">
        <p class="text-2xl sm:text-3xl font-semibold text-highlighted tracking-tight">
          {{ form.successTitle }}
        </p>
        <p class="text-base sm:text-lg text-muted leading-relaxed">
          {{ form.successDescription }}
        </p>
      </div>
    </div>

    <form
      v-else
      class="relative space-y-10 lg:space-y-12"
      :aria-busy="isSubmitting"
      @submit.prevent="onSubmit"
    >
      <div
        v-if="isSubmitting"
        class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 rounded-lg bg-default/80 backdrop-blur-sm"
        aria-live="polite"
      >
        <div class="flex items-center justify-center size-16 rounded-2xl bg-primary/10">
          <UIcon
            name="i-lucide-loader-circle"
            class="size-8 text-primary animate-spin"
          />
        </div>
        <div class="space-y-1 text-center px-6">
          <p class="text-base font-medium text-highlighted">
            {{ form.submittingLabel }}
          </p>
          <p class="text-sm text-muted">
            {{ form.submittingDescription }}
          </p>
        </div>
      </div>

      <fieldset
        :disabled="isSubmitting"
        class="space-y-10 lg:space-y-12 border-0 p-0 m-0 min-w-0"
      >
      <UAlert
        v-if="!endpoint"
        color="warning"
        variant="subtle"
        icon="i-lucide-triangle-alert"
        title="폼 전송 설정이 필요합니다"
        description="Google Apps Script URL이 설정되면 이 양식으로 문의를 받을 수 있습니다. 아래 이메일로도 보내실 수 있습니다."
      />

      <section class="space-y-5">
        <h3 class="text-base font-semibold text-highlighted">
          연락처
        </h3>
        <div class="grid gap-5 sm:grid-cols-2">
          <UFormField
            :label="form.fields.name.label"
            name="name"
            required
            size="lg"
          >
            <UInput
              v-model="state.name"
              :placeholder="form.fields.name.placeholder"
              autocomplete="name"
              required
              size="lg"
              class="w-full"
            />
          </UFormField>

          <UFormField
            :label="form.fields.email.label"
            name="email"
            required
            size="lg"
          >
            <UInput
              v-model="state.email"
              type="email"
              :placeholder="form.fields.email.placeholder"
              autocomplete="email"
              required
              size="lg"
              class="w-full"
            />
          </UFormField>
        </div>
      </section>

      <USeparator />

      <section class="space-y-5">
        <h3 class="text-base font-semibold text-highlighted">
          상담 정보
        </h3>
        <div class="grid gap-5 sm:grid-cols-2">
          <UFormField
            :label="form.fields.business.label"
            name="business"
            size="lg"
          >
            <UInput
              v-model="state.business"
              :placeholder="form.fields.business.placeholder"
              size="lg"
              class="w-full"
            />
          </UFormField>

          <UFormField
            :label="form.fields.product.label"
            name="product"
            :help="form.fields.product.hint"
            size="lg"
          >
            <USelect
              v-model="state.product"
              :items="productOptions"
              placeholder="관심 제품 선택 (선택)"
              size="lg"
              class="w-full"
            />
          </UFormField>
        </div>
      </section>

      <USeparator />

      <section class="space-y-5">
        <h3 class="text-base font-semibold text-highlighted">
          요구사항
        </h3>
        <div class="grid gap-5 lg:grid-cols-2">
          <UFormField
            :label="form.fields.features.label"
            name="features"
            size="lg"
            class="lg:col-span-1"
          >
            <UTextarea
              v-model="state.features"
              :placeholder="form.fields.features.placeholder"
              :rows="3"
              autoresize
              size="lg"
              class="w-full"
            />
          </UFormField>

          <UFormField
            :label="form.fields.schedule.label"
            name="schedule"
            size="lg"
            class="lg:col-span-1"
          >
            <UInput
              v-model="state.schedule"
              :placeholder="form.fields.schedule.placeholder"
              size="lg"
              class="w-full"
            />
          </UFormField>
        </div>
      </section>

      <USeparator />

      <section class="space-y-5">
        <UFormField
          :label="form.fields.message.label"
          name="message"
          size="lg"
        >
          <UTextarea
            v-model="state.message"
            :placeholder="form.fields.message.placeholder"
            :rows="5"
            autoresize
            size="lg"
            class="w-full"
          />
        </UFormField>
      </section>

      <input
        v-model="state.website"
        type="text"
        name="website"
        tabindex="-1"
        autocomplete="off"
        aria-hidden="true"
        class="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
      >

      <div class="pt-4">
        <UButton
          type="submit"
          :label="isSubmitting ? form.submittingLabel : form.submitLabel"
          :trailing-icon="isSubmitting ? undefined : 'i-lucide-send'"
          color="primary"
          size="xl"
          block
          :loading="isSubmitting"
          :disabled="!endpoint || isSubmitting"
        />
      </div>
      </fieldset>
    </form>
  </UCard>
</template>
