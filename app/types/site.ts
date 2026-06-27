import type { ButtonProps } from '@nuxt/ui';
import type { ProductId } from '~/data/templates';

export interface PageSeo {
  title: string;
  description: string;
  keywords?: string[];
}

export interface FaqSeoItem {
  label: string;
  content: string;
}

export interface ProductSeoItem {
  name: string;
  description: string;
  preview?: string;
  status: 'available' | 'coming-soon';
  listPrice?: number;
}

export type MarketingSeoSchema
  = | 'home'
    | 'products'
    | 'pricing'
    | 'contact'
    | 'changelog';

export interface HeroLink extends ButtonProps {
  label: string;
  to: string;
  trailing?: boolean;
  trailingIcon?: string;
  target?: string;
}

export interface FeatureItem {
  name?: string;
  title?: string;
  description: string;
  icon: string;
}

export interface PageSection {
  title: string;
  description: string;
  id?: string;
  orientation?: 'horizontal' | 'vertical';
  reverse?: boolean;
  features: FeatureItem[];
}

export interface IndexPageData {
  seo: PageSeo;
  title: string;
  titleHighlight: string;
  description: string;
  hero: {
    badge?: string;
    links: HeroLink[];
  };
  sections: PageSection[];
  features: {
    title: string;
    description: string;
    items: FeatureItem[];
  };
  cta: {
    title: string;
    description: string;
    links: HeroLink[];
  };
}

export interface ProductItem {
  name: string;
  title: string;
  description: string;
  features: string[];
  screenshot?: string;
  preview?: string;
  status: 'available' | 'coming-soon';
  badge?: string;
  reverse?: boolean;
  pricingPath?: string;
  changelogPath?: string;
  listPrice?: string;
}

export type ChangelogProductScope = ProductId | 'admin';

/** 전체 제품·관리자에 공통으로 적용되는 업데이트 */
export type ChangelogScope = 'platform' | ChangelogProductScope;

export interface ChangelogItemGroup {
  label: string;
  items: string[];
}

export interface ChangelogEntry {
  id: string;
  title: string;
  date: string;
  scope: ChangelogScope;
  summary?: string;
  groups: ChangelogItemGroup[];
}

export interface ChangelogScopeCard {
  scope: ChangelogScope;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  to: string;
}

export interface ChangelogHubPageData {
  seo: PageSeo;
  title: string;
  description: string;
  siteScopes: ChangelogScopeCard[];
  adminScope: ChangelogScopeCard;
}

export interface ChangelogScopePageData {
  scope: ChangelogProductScope;
  seo: PageSeo;
  title: string;
  description: string;
  includesPlatform: boolean;
}

export interface ProductsPageData {
  seo: PageSeo;
  title: string;
  description: string;
  items: ProductItem[];
  cta: {
    title: string;
    description: string;
    links: HeroLink[];
  };
}

export interface PricingModelStep {
  title: string;
  description: string;
}

export interface PricingMaintenanceItem {
  label: string;
  description: string;
}

export interface ProductPriceDisplay {
  listAmount: string;
  suffix: string;
  discountNote: string;
}

export interface ProductPricingPageData {
  productId: ProductId;
  seo: PageSeo;
  title: string;
  description: string;
  price: ProductPriceDisplay;
  reservation: {
    label: string;
    description: string;
  };
  includedFeatures: string[];
  notIncluded: string[];
  model: {
    title: string;
    description: string;
    steps: PricingModelStep[];
  };
  maintenance: {
    title: string;
    description: string;
    items: PricingMaintenanceItem[];
  };
  faq: {
    title: string;
    description: string;
    items: Array<{ label: string; content: string }>;
  };
}

export interface PricingHubProductCard {
  productId: ProductId;
  status: 'available' | 'coming-soon';
  name: string;
  tagline: string;
  description: string;
  reservationLabel: string;
  listAmount: string;
  discountNote: string;
  icon: string;
  to: string;
  preview?: string;
}

export interface PricingHubPageData {
  seo: PageSeo;
  title: string;
  description: string;
  intro: {
    title: string;
    description: string;
    items: Array<{ title: string; description: string; icon: string }>;
  };
  products: PricingHubProductCard[];
  model: {
    title: string;
    description: string;
    steps: PricingModelStep[];
  };
  maintenance: {
    title: string;
    description: string;
    items: PricingMaintenanceItem[];
  };
  faq: {
    title: string;
    description: string;
    items: Array<{ label: string; content: string }>;
  };
}

export interface ContactChecklistItem {
  label: string;
  hint: string;
}

export interface ContactFormField {
  label: string;
  placeholder?: string;
  hint?: string;
  required?: boolean;
}

export interface ContactPageData {
  seo: PageSeo;
  title: string;
  description: string;
  form: {
    title: string;
    description: string;
    submitLabel: string;
    successTitle: string;
    successDescription: string;
    fields: {
      name: ContactFormField;
      email: ContactFormField;
      business: ContactFormField;
      product: ContactFormField;
      features: ContactFormField;
      schedule: ContactFormField;
      message: ContactFormField;
    };
  };
  email: {
    title: string;
    description: string;
    address: string;
    icon: string;
  };
  checklist: {
    title: string;
    description: string;
    items: ContactChecklistItem[];
  };
  cta: {
    title: string;
    description: string;
    links: HeroLink[];
  };
}
