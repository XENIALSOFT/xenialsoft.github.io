import type { PricingPageData } from '~/types/site';
import {
  currentProductTemplate,
  formatPlanAdminAccounts,
  planFeatureComparison,
  planPricing,
} from '~/data/plans';
import { currentVertical, siteKeywords } from '~/data/seo';

const { starter, standard, business, enterprise } = planPricing;

export const pricingPage: PricingPageData = {
  seo: {
    title: '요금 | 피부·미용 클리닉 홈페이지·관리자 구축 비용',
    description:
      `${currentVertical.label}용 고객 서버 설치형 제니얼 홈페이지·관리자 1세트. 동일 제품에 4단계 플랜(Starter ${starter.amount}~).`,
    keywords: [
      ...siteKeywords,
      '피부과 홈페이지 비용',
      '클리닉 홈페이지 제작 가격',
      '병원 홈페이지 구축 비용',
    ],
  },
  title: '초기 구축과 건별 유지보수',
  description:
    `${currentVertical.label}용 홈페이지·관리자 1세트를 구매자 서버에 설치합니다. 4개 플랜은 홈페이지 4종이 아니라, 같은 제품에서 관리자 운영 범위만 다른 단계입니다. 월 정기 이용료는 없습니다.`,
  productModel: {
    title: '플랜 구성 방식',
    description:
      '현재는 피부·미용 클리닉용 제품 1종을 제공합니다. 플랜마다 다른 홈페이지를 주는 것이 아니라, 설치되는 제품은 같고 관리자에서 운영할 수 있는 기능 범위만 달라집니다.',
    items: [
      {
        title: '제품 1종 × 1세트',
        description:
          `${currentProductTemplate.vertical}용 ${currentProductTemplate.productSet}가 모든 플랜에 동일하게 설치됩니다.`,
        icon: 'i-lucide-layers',
      },
      {
        title: '4플랜 = 운영 범위 단계',
        description:
          'Starter·Standard·Business·Enterprise는 관리자에서 쓸 수 있는 기능과 직원 계정 수만 다릅니다. 고객이 보는 홈페이지는 플랜과 관계없이 같습니다.',
        icon: 'i-lucide-key-round',
      },
      {
        title: '추가 지점 = 세트 추가 구매',
        description:
          '다른 지점은 홈페이지·관리자 1세트를 별도로 구축합니다. 지점마다 Starter~Enterprise 중 원하는 플랜을 선택할 수 있습니다.',
        icon: 'i-lucide-building-2',
      },
      {
        title: '다른 업종 (순차 확대)',
        description:
          '피부·미용 외 업종용 홈페이지는 별도로 준비 중입니다. 출시 시에도 4단계 플랜 구조는 동일하게 적용할 예정입니다.',
        icon: 'i-lucide-sparkles',
      },
    ],
  },
  model: {
    title: '도입 방식',
    description: '서버는 구매자가 준비하고, 제니얼소프트가 제품 설치·설정·교육을 담당합니다.',
    steps: [
      {
        title: '1. 서버·인프라 준비',
        description:
          '구매자가 서버, 네트워크, 도메인, SSL 등 운영 환경을 준비합니다. 서버 비용은 구매자 부담입니다.',
      },
      {
        title: '2. 초기 구축 (1회)',
        description:
          '선택한 플랜의 관리자 운영 범위에 맞춰 1세트를 설치·연동합니다. 아래 요금은 이 1회 구축 비용입니다.',
      },
      {
        title: '3. 운영·유지보수 (건별)',
        description:
          '구축 완료 후 월 구독료는 없습니다. 이후 장애 대응·기능 추가·플랜 업그레이드는 이메일로 요청하시면 범위를 확인한 뒤 건별로 견적·일정을 안내합니다.',
      },
    ],
  },
  plans: [
    {
      title: starter.title,
      description: starter.description,
      price: { amount: starter.amount, suffix: starter.suffix },
      button: {
        label: '문의하기',
        to: '/contact',
        color: 'neutral',
        variant: 'subtle',
      },
      features: [
        '동일 제품·1세트 설치',
        `관리자 ${formatPlanAdminAccounts('starter')}`,
        '대시보드·예약·회원·파일',
        '구축 시 샘플 콘텐츠 1회 세팅',
        '구축 완료 후 사용 교육',
      ],
    },
    {
      title: standard.title,
      description: standard.description,
      price: { amount: standard.amount, suffix: standard.suffix },
      highlight: true,
      scale: true,
      button: {
        label: '문의하기',
        to: '/contact',
      },
      features: [
        'Starter + 일상 운영 관리',
        '시술·병원안내·상담·문의',
        '기본정보·검색 노출·영업시간',
        `관리자 ${formatPlanAdminAccounts('standard')}`,
        '대부분 1지점 클리닉 추천',
      ],
    },
    {
      title: business.title,
      description: business.description,
      price: { amount: business.amount, suffix: business.suffix },
      button: {
        label: '문의하기',
        to: '/contact',
        color: 'neutral',
        variant: 'subtle',
      },
      features: [
        'Standard + 홍보·다국어·연동',
        '이벤트·뉴스·팝업·전후사진',
        '마케팅 분석·소셜 로그인·접근 기록',
        `관리자 ${formatPlanAdminAccounts('business')}`,
        '관리자 기능 전체 포함',
      ],
    },
    {
      title: enterprise.title,
      description: enterprise.description,
      price: { amount: enterprise.amount, suffix: enterprise.suffix },
      button: {
        label: '상담 요청',
        to: '/contact',
        color: 'neutral',
        variant: 'subtle',
      },
      features: [
        'Business + 맞춤 기능·계정',
        '업종·업무 흐름·보안 맞춤 (범위 협의)',
        '맞춤 도메인·계정 설정',
        '대규모·특수 요건 별도 견적',
      ],
    },
  ],
  featureComparison: {
    title: '플랜별 관리자 기능',
    description:
      '동일 홈페이지·동일 고객 화면 위에서, 관리자 메뉴에서 직원이 직접 다룰 수 있는 범위만 플랜마다 다릅니다.',
    note:
      '데모(admin.xenialsoft.com)는 체험용으로 관리자 전 기능이 열려 있습니다. 계약하신 플랜의 운영 범위는 아래 표의 해당 열을 기준으로 하세요.',
    groups: planFeatureComparison,
  },
  maintenance: {
    title: '유지보수 (건별)',
    description:
      '소규모 팀으로 운영합니다. 전담 매니저·연중무휴·당일 즉시 대응은 제공하지 않습니다. 요청은 이메일로 받으며, 평일 업무 시간에 검토한 뒤 건별로 견적·일정을 안내합니다.',
    items: [
      {
        label: '장애 대응·긴급 패치',
        description: '운영 장애·보안 패치 등. 가능한 범위 내 원격 대응이며, 건별 견적·일정 협의 후 진행합니다.',
      },
      {
        label: '기능 추가·화면·콘텐츠 수정',
        description: '새 기능, 화면 변경, 연동 추가 등. 범위 확인 후 건별 견적합니다.',
      },
      {
        label: '플랜 업그레이드',
        description:
          'Starter → Standard → Business 순으로 관리자 운영 범위를 확대할 수 있습니다. 차액·설정 작업은 별도 견적합니다.',
      },
      {
        label: '버전 업그레이드',
        description: '제품 버전 업그레이드·데이터 이전. 환경·규모에 따라 별도 협의합니다.',
      },
      {
        label: '서버·도메인·SSL',
        description: '서버 호스팅, 도메인, SSL 갱신 등 인프라 비용은 구매자가 직접 부담합니다.',
      },
    ],
  },
  faq: {
    title: '자주 묻는 질문',
    description: '도입 전에 자주 받는 질문을 정리했습니다.',
    items: [
      {
        label: '4플랜이면 홈페이지도 4종인가요?',
        content:
          '아닙니다. 현재는 피부·미용 클리닉용 홈페이지·관리자 1세트가 모든 플랜에 동일하게 설치됩니다. Starter·Standard·Business·Enterprise는 직원이 관리자에서 쓸 수 있는 기능·계정 수 단계이며, 고객이 보는 홈페이지는 플랜과 관계없이 같습니다.',
      },
      {
        label: 'Standard는 어떤 고객에게 맞나요?',
        content:
          `예약·회원(Starter)에 더해, 시술·병원 안내·상담·문의를 직원이 직접 관리하려는 1지점 클리닉에 맞습니다(${standard.amount}, 관리자 ${formatPlanAdminAccounts('standard')}). 이벤트·다국어·마케팅 연동까지 필요하면 Business를 선택하세요.`,
      },
      {
        label: '월 구독료가 있나요?',
        content:
          '아닙니다. 구매자가 서버를 준비하면 제니얼소프트가 제품을 설치·설정하는 방식입니다. 초기 구축 비용 이후 월 정기 이용료는 없고, 필요할 때 건별로 유지보수합니다.',
      },
      {
        label: '데모와 실제 납품 범위가 다른가요?',
        content:
          '데모는 체험용으로 관리자 전 기능이 열려 있습니다. 계약하신 플랜의 운영 범위는 요금 페이지 비교표의 해당 열을 기준으로 하세요.',
      },
      {
        label: '서버는 누가 준비하나요?',
        content:
          '서버, 네트워크, 도메인, SSL 등 운영 인프라는 구매자가 준비합니다. 제니얼소프트는 해당 환경에 제품을 설치하고 설정·연동·교육을 진행합니다.',
      },
      {
        label: '고객 홈페이지와 관리자 대시보드는 어떻게 연결되나요?',
        content:
          '고객 홈페이지 1개와 관리자 대시보드 1개가 1:1로 연결되는 구조입니다. 한 세트로 설계되어 있으며, 다지점 통합 관리나 한 관리자로 여러 홈페이지를 묶어 운영하는 기능은 제공하지 않습니다.',
      },
      {
        label: '다른 지점도 추가할 수 있나요?',
        content:
          '추가 지점마다 홈페이지·관리자 1세트를 별도 구매·구축합니다. 지점별로 Starter~Enterprise 중 다른 플랜을 선택할 수 있습니다.',
      },
      {
        label: '요금은 어떻게 책정되었나요?',
        content:
          `${starter.amount}(Starter)은 예약·회원 표준형, ${standard.amount}(Standard)은 시술·병원안내를 직원이 직접 운영하는 1지점형, ${business.amount}(Business)은 홍보·다국어·연동·접근 기록까지 포함한 전체 관리형입니다. 모두 동일 제품 1세트 설치·교육 1회 비용이며, 서버·맞춤 작업·유지보수는 별도입니다.`,
      },
      {
        label: '플랜을 나중에 올릴 수 있나요?',
        content:
          '가능합니다. Starter → Standard → Business 순으로 관리자 운영 범위와 계정 수를 확대할 수 있습니다. 차액과 설정 작업은 건별 견적합니다.',
      },
      {
        label: '전담 매니저나 연중무휴 지원이 있나요?',
        content:
          '없습니다. 소규모 팀으로 운영하며, 전담 매니저·우선 기술 지원·24시간 대응은 제공하지 않습니다. 문의·유지보수는 이메일(xenialsoft@xenialsoft.com)로 받고, 평일 업무 시간에 검토·회신합니다. 구축 완료 후 필요한 작업은 건별로 견적·일정을 협의합니다.',
      },
      {
        label: '도입 절차는 어떻게 되나요?',
        content:
          '문의 → 업종·요구사항 상담 → 플랜·견적 확정 → 서버 환경 확인 → 설치·구축·교육 → 운영(건별 유지보수) 순으로 진행합니다.',
      },
    ],
  },
};
