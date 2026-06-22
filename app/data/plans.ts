/**
 * 마케팅 플랜 ↔ 제품 라이선스 매핑 (내부 상수)
 * @see xenial-web/apps/admin/shared/constants/admin-license-features.ts
 */

export type PlanId = 'starter' | 'standard' | 'business' | 'enterprise';

export type PlanFeatureStatus = 'included' | 'once' | 'excluded' | 'custom';

/** 요금·비교표 열 순서 */
export const planColumnOrder: readonly { key: PlanId; label: string }[] = [
  { key: 'starter', label: 'Starter' },
  { key: 'standard', label: 'Standard' },
  { key: 'business', label: 'Business' },
  { key: 'enterprise', label: 'Enterprise' },
];

export const STARTER_LICENSE_FEATURES = [
  'core',
  'members',
  'appointments',
] as const;

export const STANDARD_LICENSE_FEATURES = [
  ...STARTER_LICENSE_FEATURES,
  'treatments',
  'hospital-info',
  'customer-center',
  'site-layout',
  'site-seo',
  'site-hours',
  'site-social-links',
] as const;

export const BUSINESS_LICENSE_FEATURES = [
  ...STARTER_LICENSE_FEATURES,
  'content',
  'hospital-info',
  'customer-center',
  'treatments',
  'site-settings',
  'settings',
  'audit-logs',
] as const;

export const planPricing = {
  starter: {
    id: 'starter' as const,
    title: 'Starter',
    description: '예약·회원 중심, 구축 시 1회 세팅',
    amount: '₩3,500,000',
    amountNumeric: 3_500_000,
    suffix: '초기 구축',
    maxAdminAccounts: 3,
    licenseFeatures: STARTER_LICENSE_FEATURES,
    offerDescription: '예약·회원 중심 기본 구축',
    recommended: false,
  },
  standard: {
    id: 'standard' as const,
    title: 'Standard',
    description: '시술·병원안내·문의까지 직원이 직접 운영',
    amount: '₩5,500,000',
    amountNumeric: 5_500_000,
    suffix: '초기 구축',
    maxAdminAccounts: 8,
    licenseFeatures: STANDARD_LICENSE_FEATURES,
    offerDescription: '시술·병원안내·고객센터·검색 노출 설정 포함 1세트 구축',
    recommended: true,
  },
  business: {
    id: 'business' as const,
    title: 'Business',
    description: '홍보·다국어·연동·접근 기록까지 전체 관리',
    amount: '₩7,500,000',
    amountNumeric: 7_500_000,
    suffix: '초기 구축',
    maxAdminAccounts: 15,
    licenseFeatures: BUSINESS_LICENSE_FEATURES,
    offerDescription: '홍보·콘텐츠·다국어·외부 연동·접근 기록 포함 1세트 구축',
    recommended: false,
  },
  enterprise: {
    id: 'enterprise' as const,
    title: 'Enterprise',
    description: '맞춤 기능·계정·보안 요건 (별도 협의)',
    amount: '별도 협의',
    amountNumeric: null,
    suffix: '초기 구축',
    maxAdminAccounts: null,
    licenseFeatures: null,
    offerDescription: '맞춤 기능·계정·보안 요건 (별도 협의)',
    recommended: false,
  },
} as const;

/** 현재 제공 중인 업종·제품 구성 (모든 플랜 공통) */
export const currentProductTemplate = {
  vertical: '피부·미용 클리닉',
  productSet: '고객 홈페이지 + 관리자 대시보드 1세트',
} as const;

export const planFeatureStatusLabels: Record<PlanFeatureStatus, string> = {
  included: '포함',
  once: '구축 시 1회',
  excluded: '미포함',
  custom: '별도 협의',
};

export interface PlanFeatureComparisonRow {
  label: string;
  starter: PlanFeatureStatus;
  standard: PlanFeatureStatus;
  business: PlanFeatureStatus;
  enterprise: PlanFeatureStatus;
}

export interface PlanFeatureComparisonGroup {
  title: string;
  description?: string;
  rows: PlanFeatureComparisonRow[];
}

/** 플랜별 포함·미포함 (관리자 운영 범위 기준) */
export const planFeatureComparison: PlanFeatureComparisonGroup[] = [
  {
    title: '공통 (모든 플랜)',
    description:
      '플랜과 관계없이 같은 피부·미용 클리닉용 홈페이지·관리자 1세트가 설치됩니다. 고객이 보는 홈페이지 기능도 동일합니다. 차이는 직원이 관리자에서 직접 운영·수정할 수 있는 범위입니다.',
    rows: [
      {
        label: '피부·미용 클리닉용 홈페이지 템플릿',
        starter: 'included',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '고객 홈페이지 + 관리자 대시보드 1세트 (1:1)',
        starter: 'included',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '구매자 서버 설치·기본 설정·사용 교육',
        starter: 'included',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '고객용 공개 기능 (예약·회원·다국어 화면 등)',
        starter: 'included',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
    ],
  },
  {
    title: '운영·예약',
    rows: [
      {
        label: '대시보드·예약·회원 관리',
        starter: 'included',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '관리자 계정·파일 관리',
        starter: 'included',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '관리자 직원 계정',
        starter: 'included',
        standard: 'included',
        business: 'included',
        enterprise: 'custom',
      },
    ],
  },
  {
    title: '시술·카탈로그',
    rows: [
      {
        label: '시술 카테고리·항목·프로모션·시술 후 주의사항',
        starter: 'excluded',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '시그니처·키워드·시술 효과·장비',
        starter: 'excluded',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
    ],
  },
  {
    title: '마케팅·콘텐츠',
    rows: [
      {
        label: '이벤트·새소식·언론보도·팝업·전후사진·멤버십',
        starter: 'excluded',
        standard: 'excluded',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '구축 시 기본 메뉴·샘플 콘텐츠 세팅',
        starter: 'once',
        standard: 'once',
        business: 'once',
        enterprise: 'custom',
      },
    ],
  },
  {
    title: '병원 안내·고지',
    rows: [
      {
        label: '의료진·공지·약관·비급여·제증명·오시는 길·시설',
        starter: 'excluded',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
    ],
  },
  {
    title: '고객센터',
    rows: [
      {
        label: '자주 묻는 질문·온라인 상담·회원 1:1 문의 처리',
        starter: 'excluded',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
    ],
  },
  {
    title: '사이트 설정',
    rows: [
      {
        label: '기본정보·검색 노출·영업시간·소셜 링크',
        starter: 'excluded',
        standard: 'included',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '마케팅 분석·소셜 로그인·지도·장바구니 설정',
        starter: 'excluded',
        standard: 'excluded',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '다국어 관리 (한·영·일·중)',
        starter: 'excluded',
        standard: 'excluded',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '보안 인증서(SSL) 상태 확인',
        starter: 'excluded',
        standard: 'excluded',
        business: 'included',
        enterprise: 'included',
      },
    ],
  },
  {
    title: '보안·맞춤',
    rows: [
      {
        label: '개인정보 접근 기록',
        starter: 'excluded',
        standard: 'excluded',
        business: 'included',
        enterprise: 'included',
      },
      {
        label: '맞춤 기능·도메인 (별도 협의)',
        starter: 'excluded',
        standard: 'excluded',
        business: 'excluded',
        enterprise: 'custom',
      },
    ],
  },
];

/** 비교표·플랜 카드용 관리자 계정 수 표시 */
export function formatPlanAdminAccounts(planId: PlanId): string {
  if (planId === 'enterprise') {
    return '별도 협의';
  }
  return `최대 ${planPricing[planId].maxAdminAccounts}명`;
}

/** 비교표 셀 표시 */
export function formatPlanFeatureCell(
  planId: PlanId,
  row: PlanFeatureComparisonRow,
): string {
  if (row.label === '관리자 직원 계정') {
    return formatPlanAdminAccounts(planId);
  }

  return planFeatureStatusLabels[row[planId]];
}
