import type { PricingHubPageData } from '~/types/site';
import { pricingAddOns, pricingMaintenance, pricingModelSteps } from '~/data/pricing/shared';
import { currentVertical, siteKeywords } from '~/data/seo';
import {
  contractDiscountNote,
  formatProductListPrice,
  productList,
} from '~/data/templates';

export const pricingHubPage: PricingHubPageData = {
  seo: {
    title: '요금 | 피부·미용 클리닉 홈페이지·관리자 구축 비용',
    description:
      `${currentVertical.label}용 홈페이지·관리자 1세트. 풀기능형·모바일 허브형·간편 예약형 세 가지 제품 중 선택. 월 이용료 없음.`,
    keywords: [
      ...siteKeywords,
      '피부과 홈페이지 비용',
      '클리닉 홈페이지 제작 가격',
      '병원 홈페이지 구축 비용',
    ],
  },
  title: '요금 안내',
  description:
    `${currentVertical.label}용 제품은 세 가지입니다. 제품마다 화면 구성·예약 방식·정가가 정해져 있습니다. 월 이용료는 없습니다.`,
  intro: {
    title: '어떻게 구성되나요',
    description: '고객 홈페이지와 관리자 화면이 한 세트로 연결됩니다.',
    items: [
      {
        title: '제품 3종',
        description:
          '풀기능형, 모바일 허브형, 간편 예약형 중 하나를 고릅니다. 제품마다 정가와 포함 기능이 다릅니다.',
        icon: 'i-lucide-package',
      },
      {
        title: '1세트 = 홈페이지 + 관리자',
        description: '고객이 보는 홈페이지 1개와 직원이 쓰는 관리 화면 1개가 짝으로 설치됩니다.',
        icon: 'i-lucide-link-2',
      },
      {
        title: '추가 지점',
        description: '다른 지점은 세트를 따로 구축합니다. 지점마다 제품을 다르게 고를 수 있습니다.',
        icon: 'i-lucide-building-2',
      },
      {
        title: '추가 기능',
        description: '패키지에 없는 기능·화면은 별도 비용입니다. 상담 시 범위와 견적을 안내합니다.',
        icon: 'i-lucide-plus-circle',
      },
    ],
  },
  products: productList.map(product => ({
    productId: product.id,
    name: product.name,
    tagline: product.tagline,
    description: product.description,
    reservationLabel: product.reservationLabel,
    listAmount: formatProductListPrice(product),
    discountNote: contractDiscountNote,
    icon: product.icon,
    to: `/pricing/${product.id}`,
    preview: product.preview,
  })),
  model: {
    title: '도입 순서',
    description: '서버는 병원에서 준비하고, 제니얼소프트가 설치·설정·안내를 담당합니다.',
    steps: pricingModelSteps,
  },
  maintenance: pricingMaintenance,
  faq: {
    title: '자주 묻는 질문',
    description: '요금·제품 선택 전에 자주 받는 질문입니다.',
    items: [
      {
        label: '세 제품의 차이는 무엇인가요?',
        content:
          '풀기능형(₩8,000,000)은 메뉴가 가장 많고 시술을 고른 뒤 예약합니다. 모바일 허브형(₩6,000,000)은 스마트폰 홈 중심에 일반 예약입니다. 간편 예약형(₩4,000,000)은 빠른 예약 접수만 되며 가격이 가장 낮습니다.',
      },
      {
        label: '일반 예약과 간편 예약의 차이는?',
        content:
          '일반 예약은 고객이 시술 메뉴를 고른 뒤 예약합니다. 간편 예약은 메뉴 선택 없이 빠르게 접수하는 방식만 제공합니다.',
      },
      {
        label: '할인은 언제 적용되나요?',
        content:
          `각 제품 정가를 사이트에 안내합니다. ${contractDiscountNote}합니다. 최종 금액은 견적서에 적습니다.`,
      },
      {
        label: '월 이용료가 있나요?',
        content: '없습니다. 초기 구축 비용 이후 정기 이용료는 없고, 필요할 때 건별로 유지보수합니다.',
      },
      {
        label: '포함되지 않는 비용은?',
        content: pricingAddOns.items.join(' '),
      },
      {
        label: '서버는 누가 준비하나요?',
        content:
          '서버, 인터넷, 도메인은 병원에서 준비합니다. 구축 시 제니얼소프트가 제품 설치와 함께 보안 인증서 연동·웹 서버 기본 설정(nginx 등)을 진행합니다.',
      },
      {
        label: '도입 절차는?',
        content:
          '문의 → 상담 → 제품·견적 확정 → 서버 확인 → 설치·구축·안내 → 운영(필요 시 유지보수) 순입니다.',
      },
    ],
  },
};
