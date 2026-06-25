import type { PricingMaintenanceItem, PricingModelStep } from '~/types/site';

export const pricingModelSteps: PricingModelStep[] = [
  {
    title: '1. 서버 준비',
    description:
      '병원에서 서버, 인터넷, 도메인을 준비합니다. 서버·도메인 이용 비용은 병원 부담입니다.',
  },
  {
    title: '2. 초기 구축 (1회)',
    description:
      '선택한 제품을 설치하고, 보안 인증서 연동·웹 서버 기본 설정(nginx 등)까지 함께 진행합니다. 아래 정가는 이 1회 구축 비용입니다.',
  },
  {
    title: '3. 이후 운영 (필요 시)',
    description:
      '구축 후 월 이용료는 없습니다. 수정·추가 기능·장애 대응은 이메일로 요청하시면 범위를 확인한 뒤 별도 견적합니다.',
  },
];

export const pricingMaintenance: {
  title: string;
  description: string;
  items: PricingMaintenanceItem[];
} = {
  title: '유지보수 (건별)',
  description:
    '소규모 팀으로 운영합니다. 전담 담당자나 24시간 즉시 대응은 제공하지 않습니다. 요청은 이메일로 받으며, 평일 업무 시간에 검토한 뒤 견적·일정을 안내합니다.',
  items: [
    {
      label: '장애·오류 대응',
      description: '사이트가 멈추거나 오류가 날 때 가능한 범위에서 원격으로 도와드립니다. 건별로 견적합니다.',
    },
    {
      label: '화면·기능 추가·수정',
      description: '패키지에 없는 메뉴, 새 화면, 연동 추가 등. 범위를 확인한 뒤 별도 견적합니다.',
    },
    {
      label: '다른 제품으로 변경',
      description: '이미 구축한 뒤 다른 제품으로 바꾸는 것은 재구축에 가깝습니다. 별도 협의합니다.',
    },
    {
      label: '버전 업데이트',
      description: '제품 업데이트·자료 옮기기. 환경에 따라 별도 협의합니다.',
    },
    {
      label: '서버·도메인',
      description: '서버 임대, 도메인 갱신 등 이용 비용은 병원에서 직접 부담합니다.',
    },
  ],
};

export const pricingAddOns = {
  title: '추가 비용이 드는 경우',
  description: '아래는 정가 패키지에 포함되지 않으며, 필요 시 별도 견적합니다.',
  items: [
    '패키지에 없는 기능·화면·연동',
    '추가 지점 (홈페이지·관리자 1세트를 다시 구축)',
    '맞춤 개발·대규모 변경',
    '서버·도메인 이용 비용',
  ],
};
