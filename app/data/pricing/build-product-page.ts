import type { ProductId } from '~/data/templates';
import type { ProductPricingPageData } from '~/types/site';
import { pricingMaintenance, pricingModelSteps } from '~/data/pricing/shared';
import { currentVertical, siteKeywords } from '~/data/seo';
import {
  contractDiscountNote,
  formatProductListPrice,
  productPackages,
} from '~/data/templates';

export function buildProductPricingPage(productId: ProductId): ProductPricingPageData {
  const product = productPackages[productId];

  return {
    productId,
    seo: {
      title: `${product.name} 요금 | 피부·미용 클리닉 홈페이지`,
      description:
        `${currentVertical.label}용 ${product.name} 제품. ${product.reservationLabel} · 초기 구축 ${formatProductListPrice(product)} (VAT 별도).`,
      keywords: [
        ...siteKeywords,
        `${product.name} 홈페이지`,
        '피부과 홈페이지 비용',
        '클리닉 홈페이지 가격',
        product.reservationLabel,
      ],
    },
    title: product.name,
    description: `${currentVertical.label}용 ${product.tagline} 제품입니다. ${product.description} 월 이용료는 없습니다.`,
    price: {
      listAmount: formatProductListPrice(product),
      suffix: '초기 구축 (VAT 별도)',
      discountNote: contractDiscountNote,
    },
    reservation: {
      label: product.reservationLabel,
      description: product.reservationDescription,
    },
    includedFeatures: product.includedFeatures,
    notIncluded: product.notIncluded,
    model: {
      title: '도입 순서',
      description: '서버는 병원에서 준비하고, 제니얼소프트가 설치·설정·안내를 담당합니다.',
      steps: pricingModelSteps,
    },
    maintenance: pricingMaintenance,
    faq: buildProductFaq(productId),
  };
}

function buildProductFaq(productId: ProductId) {
  const product = productPackages[productId];
  const others = (['amber', 'beryl', 'crystal'] as const)
    .filter(id => id !== productId)
    .map((id) => {
      const p = productPackages[id];
      return `${p.name}(${formatProductListPrice(p)})`;
    })
    .join(', ');

  const items = [
    {
      label: '할인은 언제 적용되나요?',
      content:
        `견적·계약 단계에서 안내한 정가(${formatProductListPrice(product)})를 기준으로 ${contractDiscountNote}합니다. 조건은 상담 시 안내합니다.`,
    },
    {
      label: '월 이용료가 있나요?',
      content:
        '없습니다. 초기 구축 비용만 있으며, 이후 수정·추가는 필요할 때 건별로 견적합니다.',
    },
    {
      label: '다른 제품과 무엇이 다른가요?',
      content: `이 제품은 ${product.reservationLabel} 방식의 ${product.tagline}입니다. 다른 제품: ${others}. 요금 페이지에서 비교해 보세요.`,
    },
    {
      label: '포함되지 않는 것은 무엇인가요?',
      content:
        `${product.notIncluded.join(' ')} 패키지에 없는 기능이 필요하면 추가 비용이 듭니다.`,
    },
    {
      label: '데모와 실제 납품 범위가 다른가요?',
      content:
        '데모는 체험용으로 일부 기능이 더 열려 있을 수 있습니다. 계약 제품의 범위는 이 페이지의 포함·미포함 목록을 기준으로 합니다.',
    },
    {
      label: '추가 지점도 가능한가요?',
      content:
        '지점마다 홈페이지·관리자 1세트를 따로 구축합니다. 지점별로 다른 제품을 선택할 수 있습니다.',
    },
  ];

  if (product.reservationMode === 'full') {
    items.unshift({
      label: '예약은 어떻게 하나요?',
      content:
        '고객이 시술 메뉴를 고른 뒤 예약하는 일반 예약입니다. 빠른 접수만 필요하면 간편 예약형 제품을 보세요.',
    });
  }
  else {
    items.unshift({
      label: '시술을 고르는 예약도 되나요?',
      content:
        '이 제품은 간편 예약만 됩니다. 시술 메뉴를 고르는 예약이 필요하면 풀기능형 또는 모바일 허브형을 선택하세요.',
    });
  }

  return {
    title: '자주 묻는 질문',
    description: `${product.name} 도입 전에 자주 받는 질문입니다.`,
    items,
  };
}
