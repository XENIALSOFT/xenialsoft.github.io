/** 사이트 전역 SEO·JSON-LD 상수 */
export const siteBrand = {
  name: '주식회사 제니얼소프트',
  shortName: '제니얼소프트',
  alternateName: 'XENIALSOFT Inc.',
  url: 'https://xenialsoft.com',
  logo: 'https://xenialsoft.com/logo.png',
  email: 'xenialsoft@xenialsoft.com',
  locale: 'ko_KR',
  language: 'ko-KR',
} as const

/** 현재 제공 중인 첫 번째 업종 (GTM 초점) */
export const currentVertical = {
  label: '피부·미용 클리닉',
  shortLabel: '피부·미용',
  description: '피부과·미용 클리닉을 위한 고객 홈페이지와 관리자 대시보드 1세트',
} as const

export const siteKeywords = [
  '제니얼소프트',
  'XENIALSOFT',
  '피부과 홈페이지',
  '미용 클리닉 홈페이지',
  '피부과 예약 시스템',
  '클리닉 홈페이지 제작',
  '병원 홈페이지',
  '관리자 대시보드',
  '고객 홈페이지',
  '업종별 디지털 인프라',
  '제니얼 홈페이지',
  '의료기관 홈페이지',
  '피부과 마케팅',
  '클리닉 운영 시스템',
] as const

export const organizationKnowsAbout = [
  '피부과 클리닉',
  '미용 클리닉',
  '피부과 홈페이지',
  '클리닉 예약 시스템',
  '고객 홈페이지',
  '관리자 대시보드',
  '의료기관 디지털 전환',
] as const

export const defaultSeoDescription =
  `${currentVertical.description}. 예약·회원·홍보·문의까지 한 지점 운영에 맞게 구축합니다. 다른 업종 템플릿은 순차 확대 예정입니다.`
