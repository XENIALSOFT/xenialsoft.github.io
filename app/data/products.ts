import type { ProductsPageData } from '~/types/site';
import { currentVertical, siteKeywords } from '~/data/seo';

export const productsPage: ProductsPageData = {
  seo: {
    title: '제품 소개 | 피부·미용 클리닉 홈페이지·관리자 대시보드',
    description:
      `${currentVertical.label}용 제니얼 홈페이지(고객용)와 관리자 대시보드(직원용) 1:1 세트. 시술 소개, 예약, 회원, 홍보, 문의 관리까지 데모로 확인하세요.`,
    keywords: [
      ...siteKeywords,
      '피부과 홈페이지 기능',
      '클리닉 관리자 대시보드',
      '피부과 예약 홈페이지',
    ],
  },
  title: '제품 소개',
  description: `${currentVertical.label}용 고객 홈페이지와 관리자 대시보드가 1:1로 연결된 한 세트입니다. 데모로 실제 화면을 확인해 보세요.`,
  items: [
    {
      name: '제니얼 홈페이지',
      title: '피부·미용 클리닉 고객용 홈페이지',
      description: '고객이 방문하는 공식 사이트입니다. 홈, 시술·서비스 소개, 예약, 이벤트, 소식, 다국어, 회원 로그인을 제공합니다.',
      badge: '데모 가능',
      status: 'available',
      preview: 'https://alpha.xenialsoft.com',
      // screenshot: '/products/xenial-homepage.png',
      features: [
        '홈·시술·서비스 소개 및 카탈로그',
        '간편 예약·온라인 상담',
        '프로모션·이벤트·소식',
        '다국어(한·영·일·중) 및 야간 모드',
        '카카오·네이버 로그인',
      ],
    },
    {
      name: '관리자 대시보드',
      title: '클리닉 운영·예약·회원 통합 관리',
      description: '직원이 매일 쓰는 관리 화면입니다. 예약, 회원, 홍보·콘텐츠, 고객 문의, 사이트 설정을 한곳에서 관리합니다.',
      badge: '데모 가능',
      status: 'available',
      preview: 'https://admin.xenialsoft.com',
      reverse: true,
      // screenshot: '/products/admin-dashboard.png',
      features: [
        '한눈에 보는 대시보드',
        '예약·회원 관리',
        '홍보·이벤트·소식 관리',
        '1:1 문의·상담 처리',
        '제니얼 홈페이지와 연동',
      ],
    },
    {
      name: '추가 업종',
      title: '다른 업종 홈페이지 (준비 중)',
      description: '피부·미용 클리닉 외 다른 업종에도 맞는 고객 홈페이지를 순차적으로 제공할 예정입니다.',
      badge: '준비 중',
      status: 'coming-soon',
      reverse: true,
      features: [
        '업종에 맞는 화면·콘텐츠',
        '관리자 대시보드와 동일한 운영 방식',
        '빠른 오픈 지원',
      ],
    },
  ],
  cta: {
    title: '피부·미용 클리닉 도입 비용이 궁금하신가요?',
    description: '요금 페이지에서 플랜을 비교한 뒤, 맞춤 견적은 문의로 이어주세요.',
    links: [
      {
        label: '요금 안내',
        to: '/pricing',
        trailingIcon: 'i-lucide-arrow-right',
      },
      {
        label: '문의하기',
        to: '/contact',
        variant: 'subtle',
        icon: 'i-lucide-mail',
      },
    ],
  },
};
