/** 내부 제품 코드 (URL·데이터 키용). 화면에는 name(한글 제품명)만 노출합니다. */
export const productIds = ['amber', 'beryl', 'crystal'] as const;

export type ProductId = (typeof productIds)[number];

/** @deprecated URL 호환용 별칭 */
export type TemplateId = ProductId;

export const templateIds = productIds;

export type ReservationMode = 'full' | 'simple';

/** 계약 시 적용 가능한 할인율 (사이트에는 정가만 표시) */
export const CONTRACT_DISCOUNT_PERCENT = 10;

export const contractDiscountNote
  = `상담 후 계약 시 정가 기준 ${CONTRACT_DISCOUNT_PERCENT}% 할인 적용 가능`;

/** 제품별 데모 사이트 */
export const productDemoUrls: Record<ProductId, string> = {
  amber: 'https://amber.xenialsoft.com',
  beryl: 'https://beryl.xenialsoft.com',
  crystal: 'https://crystal.xenialsoft.com',
};

/** 모든 제품 공통 포함 (구축 시) */
export const commonInstallIncludes = [
  '구축·기본 설정·사용 안내 1회',
  '보안 인증서 연동·웹 서버 기본 설정 (nginx 등)',
] as const;

/** 모든 제품 공통 미포함 (비용) */
export const commonInstallExcludes = [
  '서버·도메인 이용 비용',
  '패키지에 없는 화면·기능 추가',
  '추가 지점 (별도 1세트 구축)',
  '맞춤 개발 (별도 협의)',
] as const;

export type ProductStatus = 'available' | 'coming-soon';

export interface ProductPackage {
  id: ProductId;
  status: ProductStatus;
  /** 고객용 제품명 */
  name: string;
  tagline: string;
  description: string;
  /** 초기 구축 정가 (원) */
  listPrice: number;
  reservationMode: ReservationMode;
  reservationLabel: string;
  reservationDescription: string;
  includedFeatures: string[];
  /** 패키지에 포함되지 않음 (추가 비용 안내) */
  notIncluded: string[];
  icon: string;
  preview?: string;
  sortOrder: number;
}

export const productPackages: Record<ProductId, ProductPackage> = {
  amber: {
    id: 'amber',
    status: 'available',
    name: '풀기능형',
    tagline: '메뉴와 예약을 모두 갖춘형',
    description:
      '클리닉 운영에 필요한 홈페이지 메뉴를 넓게 제공합니다. 시술을 고른 뒤 예약하는 일반 예약 방식입니다.',
    listPrice: 8_000_000,
    reservationMode: 'full',
    reservationLabel: '일반 예약',
    reservationDescription:
      '고객이 시술 메뉴를 고른 뒤 예약합니다. 여러 시술을 담아 한 번에 접수할 수 있습니다.',
    includedFeatures: [
      '고객 홈페이지 + 관리자 화면 1세트',
      '시술·이벤트·멤버십·고객 문의 등 주요 메뉴',
      '일반 예약 (시술 메뉴 선택)',
      '회원 가입·예약 내역',
      '전후 사진·병원 소개·오시는 길',
      '다국어 화면 (한·영·일·중)',
      ...commonInstallIncludes,
    ],
    notIncluded: [...commonInstallExcludes],
    icon: 'i-lucide-layout-grid',
    preview: productDemoUrls.amber,
    sortOrder: 1,
  },
  beryl: {
    id: 'beryl',
    status: 'coming-soon',
    name: '모바일 허브형',
    tagline: '스마트폰 홈 중심형',
    description:
      '스마트폰에서 보기 좋은 홈 화면에 배너·시술 소개·전후 사진·오시는 길을 모았습니다. 일반 예약을 지원합니다.',
    listPrice: 6_000_000,
    reservationMode: 'full',
    reservationLabel: '일반 예약',
    reservationDescription:
      '고객이 시술을 고른 뒤 예약합니다. 풀기능형보다 홈페이지 메뉴 구성이 단순합니다.',
    includedFeatures: [
      '고객 홈페이지 + 관리자 화면 1세트',
      '스마트폰에 맞춘 홈 화면',
      '메인 배너·시술 소개·전후 사진',
      '일반 예약 (시술 메뉴 선택)',
      '회원 가입·예약 내역',
      '오시는 길·병원 안내',
      ...commonInstallIncludes,
    ],
    notIncluded: [
      ...commonInstallExcludes,
      '풀기능형에 있는 일부 홍보·문의 메뉴 (필요 시 추가 비용)',
    ],
    icon: 'i-lucide-smartphone',
    preview: productDemoUrls.beryl,
    sortOrder: 2,
  },
  crystal: {
    id: 'crystal',
    status: 'available',
    name: '간편 예약형',
    tagline: '빠른 예약 접수형',
    description:
      '시술 소개와 병원 소식은 갖추되, 예약은 빠르게 접수하는 간편 예약만 제공합니다. 도입 부담을 낮춘 제품입니다.',
    listPrice: 4_000_000,
    reservationMode: 'simple',
    reservationLabel: '간편 예약',
    reservationDescription:
      '시술 메뉴를 고르지 않고 빠르게 예약·상담을 접수합니다. 시술별 옵션 예약은 지원하지 않습니다.',
    includedFeatures: [
      '고객 홈페이지 + 관리자 화면 1세트',
      '시술 소개·이벤트·병원 소식',
      '간편 예약 (빠른 접수)',
      '회원 가입·예약 내역',
      '병원 소개·오시는 길',
      ...commonInstallIncludes,
    ],
    notIncluded: [
      ...commonInstallExcludes,
      '일반 예약 (시술 메뉴 선택) — 풀기능형·모바일 허브형에서 제공',
    ],
    icon: 'i-lucide-calendar-clock',
    preview: productDemoUrls.crystal,
    sortOrder: 3,
  },
};

/** @deprecated productPackages 사용 */
export const productTemplates = productPackages;

export const productList = productIds
  .map(id => productPackages[id])
  .sort((a, b) => a.sortOrder - b.sortOrder);

export const productTemplateList = productList;

export function isProductId(value: string): value is ProductId {
  return (productIds as readonly string[]).includes(value);
}

export function isTemplateId(value: string): value is ProductId {
  return isProductId(value);
}

export function formatKrw(amount: number): string {
  return `₩${amount.toLocaleString('ko-KR')}`;
}

export function formatProductListPrice(product: ProductPackage): string {
  return formatKrw(product.listPrice);
}

export function calcContractPrice(listPrice: number): number {
  return Math.round(listPrice * (1 - CONTRACT_DISCOUNT_PERCENT / 100));
}
