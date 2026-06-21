import type { FaqSeoItem, MarketingSeoSchema, PageSeo, ProductSeoItem } from '~/types/site'
import { businessHours, currentVertical, siteBrand, siteKeywords, starterOfferSchema } from '~/data/seo'

interface MarketingSeoOptions extends PageSeo {
  /** 홈 등 전역 titleTemplate 없이 전체 title을 쓸 때 */
  titleTemplate?: string
  /** JSON-LD 페이지 유형 */
  schema?: MarketingSeoSchema
  /** pricing 페이지 FAQ 스키마 */
  faq?: FaqSeoItem[]
  /** products 페이지 제품 스키마 */
  products?: ProductSeoItem[]
}

const breadcrumbLabels: Record<string, string> = {
  '/products': '제품 소개',
  '/pricing': '요금',
  '/contact': '문의하기',
}

function buildBreadcrumbSchema(path: string) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: (() => {
      const items: Array<{ name: string, item: string }> = [
        { name: '홈', item: siteBrand.url },
      ]

      if (path !== '/') {
        const label = breadcrumbLabels[path]
        if (label) {
          items.push({ name: label, item: `${siteBrand.url}${path}` })
        }
      }

      return items.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      }))
    })(),
  }
}

function buildPageSchema(options: MarketingSeoOptions, pageUrl: string, path: string) {
  const schemas: Record<string, unknown>[] = [
    {
      '@type': options.schema === 'contact' ? 'ContactPage' : 'WebPage',
      '@id': `${pageUrl}#webpage`,
      name: options.title,
      description: options.description,
      url: pageUrl,
      inLanguage: siteBrand.language,
      isPartOf: {
        '@id': `${siteBrand.url}/#website`,
      },
    },
  ]

  if (path !== '/') {
    schemas.push(buildBreadcrumbSchema(path))
  }

  if (options.schema === 'home') {
    schemas.push({
      '@type': 'SoftwareApplication',
      name: '제니얼 홈페이지·관리자 대시보드',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: `${currentVertical.label}용 고객 홈페이지와 관리자 대시보드 1:1 연동 세트`,
      offers: starterOfferSchema,
      provider: {
        '@type': 'Organization',
        name: siteBrand.name,
        url: siteBrand.url,
      },
    })
  }

  if (options.schema === 'products' && options.products?.length) {
    schemas.push({
      '@type': 'ItemList',
      name: `${currentVertical.label} 제품`,
      itemListElement: options.products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: product.name,
          description: product.description,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          ...(product.preview && product.status === 'available'
            ? { url: product.preview }
            : {}),
        },
      })),
    })
  }

  if (options.schema === 'pricing' && options.faq?.length) {
    schemas.push({
      '@type': 'FAQPage',
      mainEntity: options.faq.map(item => ({
        '@type': 'Question',
        name: item.label,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.content,
        },
      })),
    })

    schemas.push({
      '@type': 'Product',
      name: '제니얼 홈페이지·관리자 대시보드 구축',
      description: `${currentVertical.label}용 고객 서버 설치형 초기 구축 패키지`,
      brand: {
        '@type': 'Brand',
        name: siteBrand.shortName,
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Starter',
          price: '3500000',
          priceCurrency: 'KRW',
          description: '단일 지점·소규모 피부·미용 클리닉용 기본 구축',
          url: `${siteBrand.url}/pricing`,
        },
        {
          '@type': 'Offer',
          name: 'Business',
          price: '5500000',
          priceCurrency: 'KRW',
          description: '다국어·외부 연동·홍보 기능이 많은 1세트 구축',
          url: `${siteBrand.url}/pricing`,
        },
      ],
    })
  }

  if (options.schema === 'contact') {
    schemas.push({
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteBrand.email,
      availableLanguage: ['Korean'],
      areaServed: 'KR',
      hoursAvailable: businessHours.specification,
    })
  }

  return schemas
}

export function useMarketingSeo(options: MarketingSeoOptions) {
  const route = useRoute()
  const site = useSiteConfig()

  const canonicalPath = route.path === '/' ? '' : route.path
  const pageUrl = `${site.url}${canonicalPath}`
  const ogImageUrl = `${site.url}/logo.png`
  const keywords = options.keywords ?? [...siteKeywords]

  useHead({
    link: [
      { rel: 'canonical', href: pageUrl },
    ],
  })

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
    robots: 'index, follow, max-image-preview:large',
  })

  useSchemaOrg(buildPageSchema(options, pageUrl, route.path))
}
