// https://nuxt.com/docs/api/configuration/nuxt-config
import {
  businessHours,
  currentVertical,
  defaultSeoDescription,
  organizationKnowsAbout,
  robotsDisallowPaths,
  robotsIndexValue,
  robotsNoIndexRoutes,
  siteBrand,
  starterOfferSchema,
} from './app/data/seo';

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/scripts',
    '@vueuse/nuxt',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      meta: [
        {
          name: 'google-site-verification',
          content: 'YgeRQv5v5bskHFM8VPk__wIgnbxcZHa1aZv2IcckFZY',
        },
        {
          name: 'naver-site-verification',
          content: '73764290bae3de7ee03601dc86640f933520d8e5',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: siteBrand.url,
    name: siteBrand.name,
    description: defaultSeoDescription,
    defaultLocale: 'ko',
  },

  routeRules: {
    ...robotsNoIndexRoutes,
  },

  sourcemap: false,

  compatibilityDate: '2026-05-06',

  nitro: {
    preset: 'github-pages',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      routes: [
        '/',
        '/products',
        '/pricing',
        '/pricing/amber',
        '/pricing/beryl',
        '/pricing/crystal',
        '/changelog',
        '/changelog/amber',
        '/changelog/beryl',
        '/changelog/crystal',
        '/changelog/admin',
        '/contact',
      ],
      crawlLinks: true,
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        '@unhead/schema-org/vue',
      ],
    },
  },

  eslint: {
    config: {
      standalone: false,
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },

  linkChecker: {
    enabled: true,
    runOnBuild: true,
  },

  ogImage: {
    enabled: false,
  },

  robots: {
    credits: false,
    robotsEnabledValue: robotsIndexValue,
    allow: ['/'],
    disallow: [...robotsDisallowPaths],
    sitemap: [`${siteBrand.url}/sitemap.xml`],
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: siteBrand.name,
      alternateName: [...siteBrand.alternateNames],
      url: siteBrand.url,
      logo: siteBrand.logo,
      email: siteBrand.email,
      description: defaultSeoDescription,
      knowsAbout: [...organizationKnowsAbout],
      areaServed: {
        '@type': 'Country',
        'name': 'South Korea',
      },
      openingHoursSpecification: [businessHours.specification],
      contactPoint: {
        '@type': 'ContactPoint',
        'contactType': 'sales',
        'email': siteBrand.email,
        'availableLanguage': ['Korean'],
        'areaServed': 'KR',
        'hoursAvailable': businessHours.specification,
      },
      makesOffer: {
        ...starterOfferSchema,
        itemOffered: {
          '@type': 'SoftwareApplication',
          'name': `제니얼 홈페이지·관리자 (${currentVertical.label})`,
          'applicationCategory': 'BusinessApplication',
          'operatingSystem': 'Web',
          'offers': starterOfferSchema,
        },
      },
    },
  },

  scripts: {
    registry: {
      googleTagManager: {
        id: 'GTM-K7GDPL4J',
        trigger: 'onNuxtReady',
      },
    },
  },

  sitemap: {
    zeroRuntime: true,
    urls: [
      { loc: '/', changefreq: 'weekly', priority: 1 },
      { loc: '/products', changefreq: 'monthly', priority: 0.9 },
      { loc: '/pricing', changefreq: 'monthly', priority: 0.8 },
      { loc: '/pricing/amber', changefreq: 'monthly', priority: 0.75 },
      { loc: '/pricing/beryl', changefreq: 'monthly', priority: 0.75 },
      { loc: '/pricing/crystal', changefreq: 'monthly', priority: 0.75 },
      { loc: '/changelog', changefreq: 'weekly', priority: 0.7 },
      { loc: '/changelog/amber', changefreq: 'weekly', priority: 0.7 },
      { loc: '/changelog/beryl', changefreq: 'weekly', priority: 0.7 },
      { loc: '/changelog/crystal', changefreq: 'weekly', priority: 0.7 },
      { loc: '/changelog/admin', changefreq: 'weekly', priority: 0.7 },
      { loc: '/contact', changefreq: 'yearly', priority: 0.7 },
    ],
  },
});
