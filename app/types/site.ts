import type { ButtonProps } from '@nuxt/ui';
import type { PlanFeatureStatus } from '~/data/plans';

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
}

export type MarketingSeoSchema
  = | 'home'
    | 'products'
    | 'pricing'
    | 'contact';

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
  /** public/ 기준 경로. 예: '/products/xenial-homepage.png' */
  screenshot?: string;
  preview?: string;
  status: 'available' | 'coming-soon';
  badge?: string;
  reverse?: boolean;
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

export interface PricingPlanPrice {
  amount: string;
  suffix: string;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: PricingPlanPrice;
  button: HeroLink;
  features: string[];
  highlight?: boolean;
  scale?: boolean;
}

export interface PricingModelStep {
  title: string;
  description: string;
}

export interface PricingMaintenanceItem {
  label: string;
  description: string;
}

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

export interface PricingPageData {
  seo: PageSeo;
  title: string;
  description: string;
  model: {
    title: string;
    description: string;
    steps: PricingModelStep[];
  };
  plans: PricingPlan[];
  productModel: {
    title: string;
    description: string;
    items: Array<{ title: string; description: string; icon: string }>;
  };
  featureComparison: {
    title: string;
    description: string;
    note: string;
    groups: PlanFeatureComparisonGroup[];
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

export interface ContactPageData {
  seo: PageSeo;
  title: string;
  description: string;
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
