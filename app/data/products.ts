import type { ProductsPageData } from '~/types/site';
import { currentVertical, siteKeywords } from '~/data/seo';
import { contractDiscountNote, formatProductListPrice, productList } from '~/data/templates';

const homepageProducts = productList.map(product => ({
  name: product.name,
  title: `${product.name} — ${product.tagline}`,
  description: `${product.description} (${product.reservationLabel})`,
  badge: product.reservationLabel,
  status: product.status,
  preview: product.preview,
  screenshot: product.id === 'amber' ? '/products/xenial-homepage.png' : undefined,
  reverse: product.sortOrder % 2 === 0,
  listPrice: formatProductListPrice(product),
  features: [
    ...product.includedFeatures.slice(0, 5),
    `정가 ${formatProductListPrice(product)} (초기 구축)`,
  ],
  pricingPath: `/pricing/${product.id}`,
  changelogPath: `/changelog/${product.id}`,
}));

export const productsPage: ProductsPageData = {
  seo: {
    title: '제품 소개 | 피부·미용 클리닉 홈페이지·관리자',
    description:
      `${currentVertical.label}용 풀기능형·모바일 허브형·간편 예약형 제품과 관리자 화면 1세트. 제품마다 화면·예약 방식·요금이 다릅니다.`,
    keywords: [
      ...siteKeywords,
      '피부과 홈페이지',
      '클리닉 예약 홈페이지',
      '병원 홈페이지 제작',
    ],
  },
  title: '제품 소개',
  description:
    `${currentVertical.label}용 고객 홈페이지와 관리자 화면이 한 세트로 연결됩니다. 세 가지 제품 중에서 골라 보세요.`,
  items: [
    ...homepageProducts,
    {
      name: '관리자 화면',
      title: '예약·회원·홍보를 한곳에서',
      description:
        '직원이 매일 쓰는 관리 화면입니다. 예약, 회원, 이벤트·소식, 고객 문의, 사이트 설정을 관리합니다. 어떤 제품을 고르든 짝으로 연결됩니다.',
      badge: '데모 가능',
      status: 'available',
      preview: 'https://admin.xenialsoft.com',
      reverse: true,
      screenshot: '/products/admin-dashboard.png',
      features: [
        '한눈에 보는 메인 화면',
        '예약·회원 관리',
        '이벤트·소식 관리',
        '고객 문의 처리',
        '선택한 제품 홈페이지와 연동',
      ],
      changelogPath: '/changelog/admin',
    },
  ],
  cta: {
    title: '어떤 제품이 맞을지 모르시겠나요?',
    description: `요금 페이지에서 제품을 비교해 보세요. ${contractDiscountNote}.`,
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
