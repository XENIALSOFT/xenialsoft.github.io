import type { IndexPageData } from '~/types/site';
import { currentVertical, defaultSeoDescription, siteKeywords } from '~/data/seo';

export const indexPage: IndexPageData = {
  seo: {
    title: '(주)제니얼소프트 | 피부·미용 클리닉 홈페이지·관리자 대시보드',
    description: defaultSeoDescription,
    keywords: [
      ...siteKeywords,
      '피부과 홈페이지 제작',
      '미용 클리닉 예약',
      '피부과 관리자 시스템',
    ],
  },
  title: '피부·미용 클리닉 디지털 인프라를 ',
  titleHighlight: '한 번에',
  description: `${currentVertical.label}을 위한 고객 홈페이지와 관리자 대시보드가 1:1로 연결됩니다. 예약·회원·홍보·문의까지, 한 지점 운영에 맞게 구축하고 운영하세요. 다른 업종 템플릿은 순차적으로 확대할 예정입니다.`,
  hero: {
    badge: `현재 ${currentVertical.label}용 템플릿 제공`,
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
      title: '홈페이지와 관리자, 1:1 한 세트',
      description: '제니얼 홈페이지 1개와 관리자 대시보드 1개가 연결됩니다. 피부·미용 클리닉 한 지점을 한 세트로 운영하고, 추가 지점은 별도 구축합니다.',
      id: 'platform',
      orientation: 'horizontal',
      features: [
        {
          name: '제니얼 홈페이지',
          description: '홈, 시술·서비스 소개, 예약, 이벤트, 소식, 다국어 등 피부·미용 클리닉 고객용 공식 홈페이지를 제공합니다.',
          icon: 'i-lucide-globe',
        },
        {
          name: '관리자 대시보드',
          description: '예약, 회원, 홍보, 문의, 사이트 설정을 한곳에서 확인하고 관리합니다.',
          icon: 'i-lucide-layout-dashboard',
        },
        {
          name: '업종별 템플릿',
          description: `${currentVertical.label}부터 시작해, 업종에 맞는 홈페이지 템플릿을 순차적으로 제공할 예정입니다.`,
          icon: 'i-lucide-layers',
        },
      ],
    },
    {
      title: '홍보 사이트부터 실제 운영까지',
      description: '회사 소개용 홈페이지는 가볍게, 실제 고객 서비스는 제니얼 홈페이지와 관리자 대시보드로. 데모를 통해 피부·미용 클리닉 화면을 직접 확인해 보세요.',
      orientation: 'horizontal',
      reverse: true,
      features: [
        {
          name: '바로 체험해 보세요',
          description: '데모 버튼을 누르면 피부·미용 클리닉용 실제와 같은 화면을 바로 열어 볼 수 있습니다.',
          icon: 'i-lucide-rocket',
        },
        {
          name: '예약·회원·홍보',
          description: '피부과·미용 클리닉 운영에 필요한 예약, 회원, 홍보 기능을 템플릿에 반영합니다.',
          icon: 'i-lucide-calendar-check',
        },
        {
          name: '검색·접근성',
          description: '검색엔진에 잘 노출되고, 다양한 기기·환경에서 편하게 이용할 수 있도록 설계합니다.',
          icon: 'i-lucide-search',
        },
      ],
    },
  ],
  features: {
    title: '무엇을 제공하나요',
    description: `복잡한 개발 없이도 ${currentVertical.shortLabel} 클리닉 디지털 운영의 핵심을 바로 시작할 수 있습니다.`,
    items: [
      {
        title: '고객용 공식 홈페이지',
        description: '홈, 시술·서비스 소개, 예약, 이벤트, 소식 등 고객이 직접 이용하는 화면을 구성합니다.',
        icon: 'i-lucide-monitor-smartphone',
      },
      {
        title: '통합 운영 관리',
        description: '관리자 대시보드에서 예약·회원·홍보·사이트 설정을 한곳에서 처리합니다.',
        icon: 'i-lucide-settings-2',
      },
      {
        title: '피부·미용 클리닉 맞춤',
        description: '현재 피부·미용 클리닉 템플릿으로 구축합니다. 추가 지점은 별도 1세트 구축이며, 허브 페이지는 협의 시 무상 제공 가능합니다.',
        icon: 'i-lucide-puzzle',
      },
      {
        title: '다국어·야간 모드',
        description: '해외 고객과 직원 모두 편하게 쓸 수 있는 화면을 기본 제공합니다.',
        icon: 'i-lucide-languages',
      },
      {
        title: '빠른 회사 소개 사이트',
        description: '제품을 판매·소개하는 회사 홈페이지도 빠르게 구축·배포할 수 있습니다.',
        icon: 'i-lucide-cloud-upload',
      },
      {
        title: '데모로 바로 확인',
        description: '버튼 한 번으로 피부·미용 클리닉 데모 사이트에 접속해 기능을 확인할 수 있습니다.',
        icon: 'i-lucide-external-link',
      },
    ],
  },
  cta: {
    title: '피부·미용 클리닉 데모로 확인해 보세요',
    description: '제니얼 홈페이지와 관리자 대시보드 데모를 열어 보시고, 요금·도입 문의를 통해 맞춤 안내를 받아 보세요.',
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
