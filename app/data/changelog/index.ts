import type {
  ChangelogEntry,
  ChangelogHubPageData,
  ChangelogProductScope,
  ChangelogScope,
  ChangelogScopePageData,
} from '~/types/site';
import { currentVertical, siteKeywords } from '~/data/seo';
import { isProductId, productList, productPackages } from '~/data/templates';
import { changelogEntries } from '~/data/changelog/entries';

export const changelogProductScopes = ['amber', 'beryl', 'crystal', 'admin'] as const;

export type ChangelogRouteScope = ChangelogProductScope;

const scopeLabels: Record<ChangelogScope, string> = {
  platform: '전체',
  amber: productPackages.amber.name,
  beryl: productPackages.beryl.name,
  crystal: productPackages.crystal.name,
  admin: '관리자 화면',
};

const scopeTaglines: Record<ChangelogProductScope, string> = {
  amber: productPackages.amber.tagline,
  beryl: productPackages.beryl.tagline,
  crystal: productPackages.crystal.tagline,
  admin: '예약·회원·홍보 관리',
};

const scopeIcons: Record<ChangelogScope, string> = {
  platform: 'i-lucide-layers',
  amber: productPackages.amber.icon,
  beryl: productPackages.beryl.icon,
  crystal: productPackages.crystal.icon,
  admin: 'i-lucide-layout-dashboard',
};

const scopeDescriptions: Record<ChangelogProductScope, string> = {
  amber: `${productPackages.amber.name} 고객 홈페이지 업데이트 내역입니다.`,
  beryl: `${productPackages.beryl.name} 고객 홈페이지 업데이트 내역입니다.`,
  crystal: `${productPackages.crystal.name} 고객 홈페이지 업데이트 내역입니다.`,
  admin: '예약·회원·홍보·문의를 관리하는 화면 업데이트 내역입니다.',
};

export function isChangelogRouteScope(value: string): value is ChangelogRouteScope {
  return (changelogProductScopes as readonly string[]).includes(value);
}

export function getChangelogScopeLabel(scope: ChangelogScope): string {
  return scopeLabels[scope];
}

export function sortChangelogEntries(entries: ChangelogEntry[]): ChangelogEntry[] {
  return [...entries].sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllChangelogEntries(): ChangelogEntry[] {
  return sortChangelogEntries(changelogEntries);
}

export function getChangelogEntriesForScope(scope: ChangelogRouteScope): ChangelogEntry[] {
  return sortChangelogEntries(
    changelogEntries.filter(entry => entry.scope === 'platform' || entry.scope === scope),
  );
}

export function getChangelogPath(scope: ChangelogRouteScope): string {
  return `/changelog/${scope}`;
}

export const changelogHubPage: ChangelogHubPageData = {
  seo: {
    title: '업데이트 | 제니얼 홈페이지·관리자',
    description:
      `${currentVertical.label}용 홈페이지·관리자 제품의 업데이트 내역입니다. 전체 공통 개선과 제품별 변경 사항을 확인하세요.`,
    keywords: [
      ...siteKeywords,
      '업데이트',
      '릴리스 노트',
      '변경 내역',
      '홈페이지 업데이트',
    ],
  },
  title: '업데이트',
  description:
    '제니얼 홈페이지·관리자 제품의 개선·수정 내역입니다. 전체 공통 업데이트와 제품별 변경 사항을 나누어 확인할 수 있습니다.',
  siteScopes: productList.map(product => ({
    scope: product.id as ChangelogScope,
    name: product.name,
    tagline: product.tagline,
    description: scopeDescriptions[product.id],
    icon: scopeIcons[product.id],
    to: getChangelogPath(product.id),
  })),
  adminScope: {
    scope: 'admin',
    name: scopeLabels.admin,
    tagline: scopeTaglines.admin,
    description: scopeDescriptions.admin,
    icon: scopeIcons.admin,
    to: getChangelogPath('admin'),
  },
};

export function getChangelogScopePage(scopeParam: string): ChangelogScopePageData | null {
  if (!isChangelogRouteScope(scopeParam)) {
    return null;
  }

  const scope = scopeParam;
  const name = getChangelogScopeLabel(scope);
  const includesPlatform = true;

  return {
    scope,
    includesPlatform,
    seo: {
      title: `${name} 업데이트 | 제니얼`,
      description: scopeDescriptions[scope],
      keywords: [
        ...siteKeywords,
        '업데이트',
        name,
        '변경 내역',
      ],
    },
    title: `${name} 업데이트`,
    description: includesPlatform
      ? `${scopeDescriptions[scope]} 전체 제품에 공통으로 적용된 업데이트도 함께 표시됩니다.`
      : scopeDescriptions[scope],
  };
}

export function getChangelogScopeForProductId(productId: string): ChangelogRouteScope | null {
  if (isProductId(productId)) {
    return productId;
  }
  return null;
}
