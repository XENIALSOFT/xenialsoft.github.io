import type { ContactPageData } from '~/types/site'
import { businessHours, currentVertical, siteKeywords } from '~/data/seo'

export const contactPage: ContactPageData = {
  seo: {
    title: '문의하기 | 피부·미용 클리닉 도입·데모 상담',
    description:
      `${currentVertical.label}용 제니얼 홈페이지·관리자 대시보드 도입, 견적, 데모 계정 요청. 이메일로 업종·지점·필요 기능을 알려 주시면 맞춤 안내해 드립니다.`,
    keywords: [
      ...siteKeywords,
      '피부과 홈페이지 문의',
      '클리닉 홈페이지 견적',
      '피부과 시스템 도입',
    ],
  },
  title: '함께 새로운 가치를 만들어가요',
  description: `${currentVertical.label} 도입·견적·데모 계정 요청은 이메일로 보내 주세요. 업종과 요구사항을 알려 주시면 맞춤 안내를 드립니다.`,
  email: {
    title: '연락하기',
    description: `아래 주소로 메일을 보내 주시면 ${businessHours.label}에 회신합니다.`,
    address: 'xenialsoft@xenialsoft.com',
    icon: 'i-lucide-mail',
  },
  checklist: {
    title: '알려주시면 좋은 정보',
    description: '아래 항목을 함께 적어 주시면 상담이 더 빠릅니다. 도입 절차와 요금은 요금 페이지에서 확인하실 수 있습니다.',
    items: [
      {
        label: '업종·운영 형태',
        hint: '예: 피부과 1개 지점, 다지점 허브 검토 중',
      },
      {
        label: '관심 플랜',
        hint: 'Starter / Business / Enterprise 중 희망 범위',
      },
      {
        label: '필요 기능',
        hint: '예: 예약, 다국어, 외부 연동, 맞춤 화면',
      },
      {
        label: '희망 일정',
        hint: '예: 2분기 오픈 목표, 서버 준비 완료',
      },
    ],
  },
  cta: {
    title: '아직 요금·제품을 보지 않으셨다면',
    description: '플랜 비교와 피부·미용 클리닉 데모는 각 페이지에서 확인하신 뒤 문의해 주세요.',
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
}
