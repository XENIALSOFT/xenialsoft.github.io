export interface ContactFormPayload {
  name: string;
  email: string;
  business: string;
  product: string;
  features: string;
  schedule: string;
  message: string;
  website?: string;
}

export function useContactFormSubmit() {
  const config = useRuntimeConfig();
  const endpoint = config.public.googleScriptUrl;

  async function submit(payload: ContactFormPayload) {
    if (payload.website) {
      return;
    }

    if (!endpoint) {
      throw new Error('문의 폼이 아직 설정되지 않았습니다. 이메일로 문의해 주세요.');
    }

    const body = new URLSearchParams({
      name: payload.name.trim(),
      email: payload.email.trim(),
      business: payload.business.trim(),
      product: payload.product.trim(),
      features: payload.features.trim(),
      schedule: payload.schedule.trim(),
      message: payload.message.trim(),
    });

    await fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });
  }

  return {
    endpoint,
    submit,
  };
}
