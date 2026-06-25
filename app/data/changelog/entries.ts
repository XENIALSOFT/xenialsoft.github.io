import type { ChangelogEntry } from '~/types/site';

export const changelogEntries: ChangelogEntry[] = [
  {
    id: '2026-06-platform-security',
    title: '보안·성능 개선',
    date: '2026-06-10',
    scope: 'platform',
    summary: '모든 제품 홈페이지와 관리자 화면에 공통으로 적용된 업데이트입니다.',
    groups: [
      {
        label: '개선',
        items: [
          '웹 서버 보안 헤더 기본값 강화',
          '이미지 로딩 속도 개선',
          '야간 모드 전환 시 깜빡임 감소',
        ],
      },
      {
        label: '수정',
        items: [
          '모바일 브라우저에서 스크롤 위치가 어긋나던 문제 수정',
        ],
      },
    ],
  },
  {
    id: '2026-05-amber-reservation',
    title: '예약 흐름 개선',
    date: '2026-05-28',
    scope: 'amber',
    summary: '풀기능형 고객 홈페이지의 예약 화면을 다듬었습니다.',
    groups: [
      {
        label: '신규',
        items: [
          '예약 단계 진행 표시 추가',
        ],
      },
      {
        label: '개선',
        items: [
          '시술 메뉴 선택 화면 모바일 터치 영역 확대',
          '예약 완료 안내 문구 정리',
        ],
      },
    ],
  },
  {
    id: '2026-05-admin-dashboard',
    title: '관리자 메인 화면 정리',
    date: '2026-05-20',
    scope: 'admin',
    summary: '직원이 매일 보는 관리자 메인 화면을 정리했습니다.',
    groups: [
      {
        label: '개선',
        items: [
          '오늘 예약·신규 문의 요약 카드 배치 조정',
          '빠른 메뉴 아이콘 크기 통일',
        ],
      },
      {
        label: '수정',
        items: [
          '예약 목록 날짜 필터가 초기화되지 않던 문제 수정',
        ],
      },
    ],
  },
  {
    id: '2026-04-beryl-home',
    title: '모바일 홈 화면 개선',
    date: '2026-04-15',
    scope: 'beryl',
    summary: '모바일 허브형 홈 화면의 배너·시술 소개 영역을 다듬었습니다.',
    groups: [
      {
        label: '개선',
        items: [
          '메인 배너 자동 전환 간격 조정',
          '시술 카드 썸네일 비율 통일',
          '전후 사진 갤러리 스와이프 반응 개선',
        ],
      },
    ],
  },
  {
    id: '2026-04-crystal-booking',
    title: '간편 예약 접수 개선',
    date: '2026-04-08',
    scope: 'crystal',
    summary: '간편 예약형의 빠른 접수 화면을 정리했습니다.',
    groups: [
      {
        label: '개선',
        items: [
          '예약·상담 접수 폼 입력 항목 순서 조정',
          '접수 완료 후 안내 메시지 명확화',
        ],
      },
      {
        label: '수정',
        items: [
          '연락처 입력 시 하이픈 자동 처리 오류 수정',
        ],
      },
    ],
  },
  {
    id: '2026-03-platform-i18n',
    title: '다국어 화면 정리',
    date: '2026-03-22',
    scope: 'platform',
    summary: '한·영·일·중 다국어 문구와 날짜 표시를 정리했습니다.',
    groups: [
      {
        label: '개선',
        items: [
          '영문·일문 메뉴 문구 통일',
          '예약 날짜 표시 형식 로케일별 정리',
        ],
      },
    ],
  },
  {
    id: '2026-03-admin-inquiry',
    title: '고객 문의 처리 개선',
    date: '2026-03-12',
    scope: 'admin',
    groups: [
      {
        label: '신규',
        items: [
          '문의 목록에서 처리 상태 필터 추가',
        ],
      },
      {
        label: '개선',
        items: [
          '문의 상세 화면에서 이전·다음 문의 이동 지원',
        ],
      },
    ],
  },
  {
    id: '2026-02-amber-membership',
    title: '멤버십·이벤트 화면 개선',
    date: '2026-02-18',
    scope: 'amber',
    groups: [
      {
        label: '개선',
        items: [
          '이벤트 목록 썸네일 로딩 방식 개선',
          '멤버십 안내 문구 가독성 향상',
        ],
      },
    ],
  },
];
