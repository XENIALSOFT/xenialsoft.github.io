/** 사이트 전역 SEO·JSON-LD 상수 */
export const siteBrand = {
  /** 검색 결과 사이트명·WebSite·og:site_name용 공식 브랜드명 */
  name: '제니얼소프트',
  legalName: '주식회사 제니얼소프트',
  alternateNames: ['주식회사 제니얼소프트', '(주)제니얼소프트', 'XENIALSOFT Inc.'],
  url: 'https://xenialsoft.com',
  logo: 'https://xenialsoft.com/logo.png',
  email: 'xenialsoft@xenialsoft.com',
  locale: 'ko_KR',
  language: 'ko-KR',
} as const;

/** 현재 제공 중인 첫 번째 업종 */
export const currentVertical = {
  label: '피부·미용 클리닉',
  shortLabel: '피부·미용',
  description: '피부과·미용 클리닉을 위한 고객 홈페이지와 관리자 화면 1세트',
} as const;

export const siteKeywords = [
  '제니얼소프트',
  'XENIALSOFT',
  '피부과 홈페이지',
  '미용 클리닉 홈페이지',
  '피부과 예약 시스템',
  '클리닉 홈페이지 제작',
  '병원 홈페이지',
  '관리자 화면',
  '고객 홈페이지',
  '업종별 디지털 인프라',
  '제니얼 홈페이지',
  '의료기관 홈페이지',
  '피부과 마케팅',
  '클리닉 운영 시스템',
] as const;

export const organizationKnowsAbout = [
  '피부과 클리닉',
  '미용 클리닉',
  '피부과 홈페이지',
  '클리닉 예약 시스템',
  '고객 홈페이지',
  '관리자 화면',
  '의료기관 디지털 전환',
] as const;

export const defaultSeoDescription
  = `${currentVertical.description}. 예약·회원·홍보·문의까지 한 지점 운영에 맞게 구축합니다.`;

/** indexable 페이지 robots meta (@nuxtjs/seo robotsEnabledValue와 동일) */
export const robotsIndexValue
  = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' as const;

/** robots.txt Disallow 경로 (GitHub Pages·Nuxt prerender 산출물) */
export const robotsDisallowPaths = [
  '/200.html',
  '/404.html',
  '/*/_payload.json',
  '/__sitemap__/',
] as const;

/** noindex 적용할 Nuxt routeRules 경로 */
export const robotsNoIndexRoutes = {
  '/200.html': { robots: false },
  '/404.html': { robots: false },
  '/**/_payload.json': { robots: false },
  '/__sitemap__/**': { robots: false },
} as const;

/** 간편 예약형 제품 JSON-LD Offer (SoftwareApplication·Product 공통) */
export const starterOfferSchema = {
  '@type': 'Offer' as const,
  'price': '4000000',
  'priceCurrency': 'KRW',
  'description': '간편 예약형 초기 구축 (VAT 별도)',
  'url': `${siteBrand.url}/pricing`,
};

/** 평일 영업·상담 가능 시간 (오전 10시–오후 5시) */
export const businessHours = {
  label: '평일 10:00–17:00',
  specification: {
    '@type': 'OpeningHoursSpecification' as const,
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ] as const,
    'opens': '10:00:00',
    'closes': '17:00:00',
  },
} as const;
