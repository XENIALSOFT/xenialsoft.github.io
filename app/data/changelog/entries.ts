import type { ChangelogEntry } from '~/types/site';

export const changelogEntries: ChangelogEntry[] = [
  // ── Amber ──────────────────────────────────────────────
  {
    id: '2026-06-amber-treatment-gallery',
    title: '시술·전후사진 보강',
    date: '2026-06-23',
    scope: 'amber',
    summary: '시술 상세 정보와 전후사진 조회 기능을 보강했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '시술 상세에 시술 효과·시술 장비 정보 표시',
          '전후사진 다각도 조회 지원',
        ],
      },
      {
        label: '개선',
        items: [
          '인테리어·갤러리 이미지 표시 안정화',
        ],
      },
    ],
  },
  {
    id: '2026-06-amber-search-auth',
    title: '검색·인증',
    date: '2026-06-22',
    scope: 'amber',
    summary: '검색 엔진 인증과 카드사 혜택 연동을 추가했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '네이버 사이트 소유 확인 적용',
          '카드사 혜택 공개 API 연동',
        ],
      },
    ],
  },
  {
    id: '2026-06-amber-directions',
    title: '오시는 길·병원 안내',
    date: '2026-06-20',
    scope: 'amber',
    summary: '오시는 길과 병원 안내 화면을 개선했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '오시는 길에 구글·네이버·카카오 지도 링크 추가',
          '진료시간 섹션 추가',
        ],
      },
      {
        label: '개선',
        items: [
          '공간안내 UI 개선',
        ],
      },
    ],
  },
  {
    id: '2026-06-amber-seo-ui',
    title: '화면·SEO',
    date: '2026-06-18',
    scope: 'amber',
    summary: '다국어 표기, SEO, 이벤트 화면을 정리했습니다.',
    groups: [
      {
        label: '개선',
        items: [
          '사이트 다국어를 자국어 표기로 변경',
          '@nuxtjs/seo 적용 및 Open Graph 메타 보강',
          '시술 후 주의사항 배지 표시 개선',
          '응모형·댓글형 이벤트 화면 정리',
        ],
      },
      {
        label: '수정',
        items: [
          '로그인·토큰 갱신 안정화',
        ],
      },
    ],
  },
  {
    id: '2026-06-amber-pages',
    title: '주요 페이지 추가',
    date: '2026-06-16',
    scope: 'amber',
    summary: '고객 홈페이지 핵심 페이지를 대거 추가했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '병원소개, 오시는 길, FAQ, 1:1문의, 고객센터 페이지',
          '예약·간편예약, 예약 내역 조회, 회원가입·정보 수정',
          '전후사진, 프로모션·전체시술 허브, 검색 페이지',
          '팝업 노출, 소셜 계정 연결',
        ],
      },
    ],
  },
  {
    id: '2026-06-amber-content',
    title: '콘텐츠·안내',
    date: '2026-06-12',
    scope: 'amber',
    summary: '멤버십·안내 콘텐츠와 장바구니 기능을 추가했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '멤버십 안내 페이지',
          '비급여 수가, 제증명 발급 안내',
          '장바구니 (설정에 따라 사용/미사용)',
        ],
      },
      {
        label: '개선',
        items: [
          '시술 후 주의사항 (즐겨찾기·다국어)',
        ],
      },
    ],
  },

  // ── Beryl ──────────────────────────────────────────────
  {
    id: '2026-06-beryl-main-member',
    title: '메인·회원',
    date: '2026-06-24',
    scope: 'beryl',
    summary: '메인 화면과 회원 기능을 개선했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '로그아웃 기능 추가',
        ],
      },
      {
        label: '개선',
        items: [
          '멤버십 영역 개선',
          '오시는 길 지도 영역 적용',
        ],
      },
      {
        label: '수정',
        items: [
          '메인 배너 슬라이드 오류 수정',
        ],
      },
    ],
  },
  {
    id: '2026-06-beryl-home',
    title: '메인 화면',
    date: '2026-06-23',
    scope: 'beryl',
    summary: '모바일 허브형 메인 화면을 다듬었습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '메인에 인기 검색어 표시',
        ],
      },
      {
        label: '개선',
        items: [
          '전후사진 영역 개선',
          '비로그인 시 후사진만 조회 가능하도록 권한 조정',
        ],
      },
    ],
  },
  {
    id: '2026-06-beryl-popup',
    title: '팝업·메인',
    date: '2026-06-22',
    scope: 'beryl',
    groups: [
      {
        label: '신규',
        items: [
          '팝업 기능 추가',
        ],
      },
      {
        label: '개선',
        items: [
          '메인 화면 레이아웃 개선',
        ],
      },
    ],
  },

  // ── Crystal ────────────────────────────────────────────
  {
    id: '2026-06-crystal-reservation',
    title: '예약·회원',
    date: '2026-06-24',
    scope: 'crystal',
    summary: '간편 예약형의 예약·회원 화면을 보강했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '예약 확인 페이지 추가',
          '회원정보 변경 페이지 추가',
          '전후사진 페이지 추가',
        ],
      },
      {
        label: '개선',
        items: [
          '예약 내역·회원 화면 스타일 정리',
        ],
      },
    ],
  },
  {
    id: '2026-06-crystal-content',
    title: '콘텐츠 확장',
    date: '2026-06-23',
    scope: 'crystal',
    summary: '간편 예약형 템플릿의 콘텐츠 페이지를 확장했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '병원소개, 병원소식, 전체시술·상세 페이지',
          '팝업 기능 추가',
        ],
      },
      {
        label: '개선',
        items: [
          '이벤트 페이지 개선',
        ],
      },
    ],
  },

  // ── Admin ──────────────────────────────────────────────
  {
    id: '2026-06-admin-banner',
    title: '메인 배너·기본정보',
    date: '2026-06-24',
    scope: 'admin',
    summary: '메인 배너 관리와 기본 설정 기능을 보강했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '메인화면 배너 관리 (이미지·동영상 선택, 오시는길 배너 유형)',
          '기본정보에 브랜드(로고) 설정 추가',
          '전후사진 촬영 각도 관리',
          '모바일 하단 메뉴 기본 제공',
        ],
      },
    ],
  },
  {
    id: '2026-06-admin-ops',
    title: '운영 편의',
    date: '2026-06-19',
    scope: 'admin',
    summary: '관리자 화면의 운영 편의성과 모바일 대응을 개선했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '예약 알림 추가',
        ],
      },
      {
        label: '개선',
        items: [
          '대시보드 레이아웃·차트 개선, 비개발자 친화 문구 정리',
          '약관·정책 서브메뉴 탭 구조로 변경',
          'SEO 목록에 등록자 표시',
          '소셜 링크 플랫폼·아이콘 추가',
          '각종 관리 메뉴 모바일 화면 개선',
        ],
      },
    ],
  },
  {
    id: '2026-06-admin-menus',
    title: '메뉴·인증',
    date: '2026-06-16',
    scope: 'admin',
    summary: '관리 메뉴와 인증·파일 기능을 추가했습니다.',
    groups: [
      {
        label: '신규',
        items: [
          'FAQ, 1:1문의, 상담, 공지사항, 새소식·언론보도 메뉴 추가',
          '시술 효과·장비 관리',
          'SSL 환경설정·갱신',
          '파일 에셋 조회 기능',
        ],
      },
    ],
  },

  // ── Platform (공통) ────────────────────────────────────
  {
    id: '2026-06-platform-search-member',
    title: '검색·회원',
    date: '2026-06-22',
    scope: 'platform',
    summary: '모든 제품 홈페이지에 공통으로 적용된 업데이트입니다.',
    groups: [
      {
        label: '신규',
        items: [
          'AI 검색 대응 (구조화 데이터·메타)',
        ],
      },
      {
        label: '개선',
        items: [
          '회원가입 레이아웃·스타일 개선',
          '로그인 화면 모바일 대응',
        ],
      },
    ],
  },
  {
    id: '2026-06-platform-analytics',
    title: '분석·안정성',
    date: '2026-06-18',
    scope: 'platform',
    summary: '모든 제품 홈페이지에 공통으로 적용된 업데이트입니다.',
    groups: [
      {
        label: '개선',
        items: [
          '구글 태그매니저로 분석 도구 전환',
        ],
      },
      {
        label: '수정',
        items: [
          '로그인·토큰(AT/RT) 오류 수정',
          'HTTP/2 간헐 오류 수정',
        ],
      },
    ],
  },
  {
    id: '2026-06-platform-event',
    title: '사이트 이벤트',
    date: '2026-06-19',
    scope: 'platform',
    summary: '모든 제품 홈페이지에 공통으로 적용된 업데이트입니다.',
    groups: [
      {
        label: '신규',
        items: [
          '진행 중인 댓글형·응모형 이벤트 수정·삭제 지원',
        ],
      },
    ],
  },
  {
    id: '2026-06-platform-reservation',
    title: '예약·회원 (공통)',
    date: '2026-06-15',
    scope: 'platform',
    summary: '모든 제품 홈페이지에 공통으로 적용된 업데이트입니다.',
    groups: [
      {
        label: '신규',
        items: [
          '예약·간편예약 프로세스',
          '회원가입·정보 수정 흐름',
          '팝업 모달 공통 컴포넌트',
        ],
      },
    ],
  },
];
