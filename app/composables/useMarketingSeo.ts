import type { ProductId } from '~/data/templates';
import type { FaqSeoItem, MarketingSeoSchema, PageSeo, ProductSeoItem } from '~/types/site';
import { getChangelogScopeLabel, isChangelogRouteScope } from '~/data/changelog';
import { businessHours, currentVertical, siteBrand, siteKeywords, starterOfferSchema } from '~/data/seo';
import { isProductId, productPackages } from '~/data/templates';

interface PricingProductOffer {
  name: string;
  listPrice: number;
}

interface MarketingSeoOptions extends PageSeo {
  titleTemplate?: string;
  schema?: MarketingSeoSchema;
  faq?: FaqSeoItem[];
  products?: ProductSeoItem[];
  pricingProductId?: ProductId;
  pricingListPrice?: number;
  pricingProducts?: PricingProductOffer[];
}

const breadcrumbLabels: Record<string, string> = {
  '/products': '제품 소개',
  '/pricing': '요금',
  '/changelog': '업데이트',
  '/contact': '문의하기',
};

function buildBreadcrumbItems(path: string): Array<{ name: string; item: string }> {
  const items: Array<{ name: string; item: string }> = [
    { name: '홈', item: siteBrand.url },
  ];

  if (path.startsWith('/pricing/')) {
    items.push({ name: '요금', item: `${siteBrand.url}/pricing` });
    const segment = path.split('/')[2] ?? '';
    if (isProductId(segment)) {
      items.push({
        name: productPackages[segment].name,
        item: `${siteBrand.url}${path}`,
      });
    }
    return items;
  }

  if (path.startsWith('/changelog/')) {
    items.push({ name: '업데이트', item: `${siteBrand.url}/changelog` });
    const segment = path.split('/')[2] ?? '';
    if (isChangelogRouteScope(segment)) {
      items.push({
        name: getChangelogScopeLabel(segment),
        item: `${siteBrand.url}${path}`,
      });
    }
    return items;
  }

  const label = breadcrumbLabels[path];
  if (label) {
    items.push({ name: label, item: `${siteBrand.url}${path}` });
  }

  return items;
}

function buildBreadcrumbSchema(path: string) {
  const items = buildBreadcrumbItems(path);
  if (items.length <= 1) {
    return null;
  }

  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((crumb, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': crumb.name,
      'item': crumb.item,
    })),
  };
}

function buildPricingOffers(pageUrl: string, options: MarketingSeoOptions) {
  if (options.pricingProductId && options.pricingListPrice) {
    const product = productPackages[options.pricingProductId];
    return [{
      '@type': 'Offer',
      'name': product.name,
      'price': String(options.pricingListPrice),
      'priceCurrency': 'KRW',
      'description': `${product.name} 초기 구축 (VAT 별도)`,
      'url': pageUrl,
    }];
  }

  if (options.pricingProducts?.length) {
    return options.pricingProducts.map(product => ({
      '@type': 'Offer',
      'name': product.name,
      'price': String(product.listPrice),
      'priceCurrency': 'KRW',
      'description': `${product.name} 초기 구축 (VAT 별도)`,
      'url': `${siteBrand.url}/pricing`,
    }));
  }

  return [{
    ...starterOfferSchema,
    url: pageUrl,
  }];
}

function buildPageSchema(options: MarketingSeoOptions, pageUrl: string, path: string) {
  const schemas: Record<string, unknown>[] = [
    {
      '@type': options.schema === 'contact' ? 'ContactPage' : 'WebPage',
      '@id': `${pageUrl}#webpage`,
      'name': options.title,
      'description': options.description,
      'url': pageUrl,
      'inLanguage': siteBrand.language,
      'isPartOf': {
        '@id': `${siteBrand.url}/#website`,
      },
    },
  ];

  const breadcrumb = buildBreadcrumbSchema(path);
  if (breadcrumb) {
    schemas.push(breadcrumb);
  }

  if (options.schema === 'home') {
    schemas.push({
      '@type': 'SoftwareApplication',
      'name': '제니얼 홈페이지·관리자',
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Web',
      'description': `${currentVertical.label}용 고객 홈페이지와 관리자 화면 1세트`,
      'offers': starterOfferSchema,
      'provider': {
        '@type': 'Organization',
        'name': siteBrand.name,
        'url': siteBrand.url,
      },
    });
  }

  if (options.schema === 'products' && options.products?.length) {
    schemas.push({
      '@type': 'ItemList',
      'name': `${currentVertical.label} 제품`,
      'itemListElement': options.products.map((product, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'SoftwareApplication',
          'name': product.name,
          'description': product.description,
          'applicationCategory': 'BusinessApplication',
          'operatingSystem': 'Web',
          ...(product.preview && product.status === 'available'
            ? { url: product.preview }
            : {}),
          ...(product.listPrice
            ? {
                offers: {
                  '@type': 'Offer',
                  'price': String(product.listPrice),
                  'priceCurrency': 'KRW',
                },
              }
            : {}),
        },
      })),
    });
  }

  if (options.schema === 'pricing' && options.faq?.length) {
    schemas.push({
      '@type': 'FAQPage',
      'mainEntity': options.faq.map(item => ({
        '@type': 'Question',
        'name': item.label,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.content,
        },
      })),
    });

    const productName = options.pricingProductId
      ? `${productPackages[options.pricingProductId].name} 홈페이지·관리자 구축`
      : '제니얼 홈페이지·관리자 구축';

    schemas.push({
      '@type': 'Product',
      'name': productName,
      'description': `${currentVertical.label}용 초기 구축 패키지`,
      'brand': {
        '@type': 'Brand',
        'name': siteBrand.name,
      },
      'offers': buildPricingOffers(pageUrl, options),
    });
  }

  if (options.schema === 'contact') {
    schemas.push({
      '@type': 'ContactPoint',
      'contactType': 'sales',
      'email': siteBrand.email,
      'availableLanguage': ['Korean'],
      'areaServed': 'KR',
      'hoursAvailable': businessHours.specification,
    });
  }

  return schemas;
}

export function useMarketingSeo(options: MarketingSeoOptions) {
  const route = useRoute();
  const site = useSiteConfig();

  const canonicalPath = route.path === '/' ? '' : route.path;
  const pageUrl = `${site.url}${canonicalPath}`;
  const ogImageUrl = `${site.url}/logo.png`;
  const keywords = options.keywords ?? [...siteKeywords];

  useHead({
    link: [
      { rel: 'canonical', href: pageUrl },
    ],
  });

  useSeoMeta({
    titleTemplate: options.titleTemplate,
    title: options.title,
    description: options.description,
    keywords: keywords.join(', '),
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: 'website',
    ogUrl: pageUrl,
    ogImage: ogImageUrl,
    ogLocale: siteBrand.locale,
    ogSiteName: siteBrand.name,
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterCard: 'summary_large_image',
    twitterImage: ogImageUrl,
  });

  useSchemaOrg(buildPageSchema(options, pageUrl, route.path));
}
