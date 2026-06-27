import type { ContactPageData } from '~/types/site';
import { businessHours, currentVertical, siteKeywords } from '~/data/seo';
import { contractDiscountNote } from '~/data/templates';

export const contactPage: ContactPageData = {
  seo: {
    title: '문의하기 | 피부·미용 클리닉 도입·데모 상담',
    description:
      `${currentVertical.label}용 홈페이지·관리자 도입, 견적, 데모 요청. 문의 양식으로 업종·지점·필요 기능을 알려 주시면 안내해 드립니다.`,
    keywords: [
      ...siteKeywords,
      '피부과 홈페이지 문의',
      '클리닉 홈페이지 견적',
      '피부과 시스템 도입',
    ],
  },
  title: '함께 새로운 가치를 만들어가요',
  description: `${currentVertical.label} 도입·견적·데모 요청은 아래 양식으로 보내 주세요. 업종과 요구사항을 알려 주시면 맞춤 안내를 드립니다.`,
  form: {
    title: '문의 보내기',
    description: `소규모 팀으로 ${businessHours.label}에 순차 회신합니다. 전담 담당자 배정이나 즉시 응답은 어렵습니다.`,
    submitLabel: '문의 보내기',
    successTitle: '문의가 접수되었습니다',
    successDescription: '확인 후 입력하신 이메일로 답변드리겠습니다.',
    fields: {
      name: {
        label: '이름',
        placeholder: '홍길동',
        required: true,
      },
      email: {
        label: '이메일',
        placeholder: 'name@example.com',
        required: true,
      },
      business: {
        label: '업종·운영 형태',
        placeholder: '예: 피부과 1개 지점',
      },
      product: {
        label: '관심 제품',
        hint: '아직 정하지 않으셨다면 비워 두셔도 됩니다.',
      },
      features: {
        label: '필요한 기능',
        placeholder: '예: 시술별 예약, 다국어, 빠른 예약 접수',
      },
      schedule: {
        label: '희망 일정',
        placeholder: '예: 2분기 오픈 목표',
      },
      message: {
        label: '추가 문의',
        placeholder: '궁금한 점이나 요청 사항을 자유롭게 적어 주세요.',
      },
    },
  },
  email: {
    title: '연락하기',
    description: `양식 대신 직접 메일을 보내실 수도 있습니다. ${businessHours.label}에 순차 회신합니다.`,
    address: 'xenialsoft@xenialsoft.com',
    icon: 'i-lucide-mail',
  },
  checklist: {
    title: '알려주시면 좋은 정보',
    description: `아래 항목을 함께 적어 주시면 상담이 더 빠릅니다. 제품과 요금은 각 페이지에서 확인하실 수 있습니다. ${contractDiscountNote}.`,
    items: [
      {
        label: '업종·운영 형태',
        hint: '예: 피부과 1개 지점',
      },
      {
        label: '관심 제품',
        hint: '예: 풀기능형, 모바일 허브형, 간편 예약형',
      },
      {
        label: '필요한 기능',
        hint: '예: 시술별 예약, 다국어, 빠른 예약 접수',
      },
      {
        label: '희망 일정',
        hint: '예: 2분기 오픈 목표',
      },
    ],
  },
  cta: {
    title: '아직 제품·요금을 보지 않으셨다면',
    description: '제품 소개와 요금을 확인하신 뒤 문의해 주세요.',
    links: [
      {
        label: '요금 안내',
        to: '/pricing',
        trailingIcon: 'i-lucide-arrow-right',
      },
      {
        label: '제품·데모',
        to: '/products',
        variant: 'subtle',
        icon: 'i-lucide-layout-grid',
      },
    ],
  },
};
