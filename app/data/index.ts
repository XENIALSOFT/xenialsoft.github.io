import type { IndexPageData } from '~/types/site';
import { currentVertical, defaultSeoDescription, siteKeywords } from '~/data/seo';
import { contractDiscountNote } from '~/data/templates';

export const indexPage: IndexPageData = {
  seo: {
    title: '(주)제니얼소프트 | 피부·미용 클리닉 홈페이지·관리자',
    description: defaultSeoDescription,
    keywords: [
      ...siteKeywords,
      '피부과 홈페이지 제작',
      '미용 클리닉 예약',
      '피부과 관리자',
    ],
  },
  title: '피부·미용 클리닉 홈페이지를 ',
  titleHighlight: '한 번에',
  description: `${currentVertical.label}을 위한 고객 홈페이지와 관리자 화면이 한 세트로 연결됩니다. 예약·회원·홍보·문의까지, 한 지점 운영에 맞게 구축하고 운영하세요.`,
  hero: {
    badge: '풀기능형 · 모바일 허브형 · 간편 예약형',
    links: [
      {
        label: '제품 살펴보기',
        icon: 'i-lucide-layout-grid',
        trailing: true,
        to: '/products',
        size: 'xl',
      },
      {
        label: '요금 안내',
        icon: 'i-lucide-credit-card',
        to: '/pricing',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle',
      },
    ],
  },
  sections: [
    {
      title: '홈페이지와 관리 화면, 한 세트',
      description: '고객 홈페이지 1개와 관리 화면 1개가 연결됩니다. 한 지점을 한 세트로 운영하고, 추가 지점은 따로 구축합니다.',
      id: 'platform',
      orientation: 'horizontal',
      features: [
        {
          name: '고객 홈페이지',
          description: '홈, 시술 소개, 예약, 이벤트, 소식, 다국어 등 고객이 방문하는 공식 사이트입니다.',
          icon: 'i-lucide-globe',
        },
        {
          name: '관리자 화면',
          description: '예약, 회원, 홍보, 문의, 사이트 설정을 한곳에서 확인하고 관리합니다.',
          icon: 'i-lucide-layout-dashboard',
        },
        {
          name: '제품 3종',
          description: '풀기능형, 모바일 허브형, 간편 예약형 중에서 병원에 맞는 제품을 고릅니다.',
          icon: 'i-lucide-package',
        },
      ],
    },
    {
      title: '데모로 먼저 확인하세요',
      description: '실제와 비슷한 화면을 열어 보고, 제품과 요금을 비교한 뒤 문의하시면 됩니다.',
      orientation: 'horizontal',
      reverse: true,
      features: [
        {
          name: '바로 체험',
          description: '데모 버튼을 누르면 피부·미용 클리닉용 화면을 바로 열어 볼 수 있습니다.',
          icon: 'i-lucide-rocket',
        },
        {
          name: '예약·회원·홍보',
          description: '클리닉 운영에 필요한 예약, 회원, 홍보 기능을 제품에 담았습니다.',
          icon: 'i-lucide-calendar-check',
        },
        {
          name: '검색 노출',
          description: '검색엔진에 잘 노출되도록 기본 설정을 제공합니다.',
          icon: 'i-lucide-search',
        },
      ],
    },
  ],
  features: {
    title: '무엇을 제공하나요',
    description: `복잡한 개발 없이 ${currentVertical.shortLabel} 클리닉 운영의 핵심을 바로 시작할 수 있습니다.`,
    items: [
      {
        title: '고객용 홈페이지',
        description: '홈, 시술 소개, 예약, 이벤트, 소식 등 고객이 직접 쓰는 화면입니다.',
        icon: 'i-lucide-monitor-smartphone',
      },
      {
        title: '통합 운영 관리',
        description: '관리 화면에서 예약·회원·홍보·사이트 설정을 한곳에서 처리합니다.',
        icon: 'i-lucide-settings-2',
      },
      {
        title: '클리닉에 맞는 제품',
        description: '풀기능형, 모바일 허브형, 간편 예약형 중에서 고릅니다. 추가 지점은 세트를 따로 구축합니다.',
        icon: 'i-lucide-puzzle',
      },
      {
        title: '다국어·야간 모드',
        description: '해외 고객과 직원 모두 편하게 쓸 수 있는 화면을 제공합니다.',
        icon: 'i-lucide-languages',
      },
      {
        title: '월 이용료 없음',
        description: '초기 구축 후 정기 이용료는 없습니다. 필요할 때만 유지보수를 요청하세요.',
        icon: 'i-lucide-wallet',
      },
      {
        title: '데모로 바로 확인',
        description: '버튼 한 번으로 데모 사이트에 접속해 기능을 확인할 수 있습니다.',
        icon: 'i-lucide-external-link',
      },
    ],
  },
  cta: {
    title: '데모와 요금을 확인해 보세요',
    description: `제품 소개와 요금을 보신 뒤 문의해 주세요. ${contractDiscountNote}.`,
    links: [
      {
        label: '제품 소개',
        to: '/products',
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
